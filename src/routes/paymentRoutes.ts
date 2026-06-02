import express from 'express';
import fetch from 'node-fetch';
import dotenv from 'dotenv';
import { v4 as uuidv4 } from 'uuid';
import { Order } from '../models/Order';
import { User } from '../models/User';
import nodemailer from 'nodemailer';

dotenv.config();

const router = express.Router();

const APP_ID = process.env.CASHFREE_APP_ID || '';
const SECRET_KEY = process.env.CASHFREE_SECRET_KEY || '';
const ENV = process.env.CASHFREE_ENV || 'TEST';
const BASE_URL = ENV === 'PROD' ? 'https://api.cashfree.com/pg' : 'https://sandbox.cashfree.com/pg';
const FRONTEND_URL = process.env.FRONTEND_URL || 'https://lms-frontend-blue-mu.vercel.app';

router.post('/create-order', async (req, res) => {
    try {
        const { amount, email, phone, courseData } = req.body;
        const frontEndUrl = req.get('origin') || process.env.FRONTEND_URL || 'https://lms-frontend-blue-mu.vercel.app';

        const orderId = "ORDER_" + uuidv4().slice(0, 8).toUpperCase();

        // Sanitize Course ID
        let rawCourseId = courseData?.course || 'python-ai-course';
        if (rawCourseId === 'Python Programming for AI') rawCourseId = 'python-ai-course';
        if (rawCourseId === 'Neural Networks & Deep Learning') rawCourseId = 'neural-networks-course';

        // Save Order to DB
        const newOrder = new Order({
            orderId,
            amount: amount || 1.00,
            customerEmail: email,
            customerPhone: phone,
            customerName: courseData?.name || 'Student',
            courseId: rawCourseId,
            status: 'PENDING'
        });
        await newOrder.save();

        const payload = {
            order_amount: amount || 1.00,
            order_currency: "INR",
            order_id: orderId,
            customer_details: {
                customer_id: "CUST_" + uuidv4().slice(0, 8),
                customer_phone: phone || "9999999999",
                customer_name: courseData?.name || "Student",
                customer_email: email || "student@example.com"
            },
            order_meta: {
                return_url: `${frontEndUrl}/?order_id=${orderId}`,
                notify_url: "https://www.example.com/webhook"
            }
        };

        const response = await fetch(`${BASE_URL}/orders`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-version': '2023-08-01',
                'x-client-id': APP_ID,
                'x-client-secret': SECRET_KEY
            },
            body: JSON.stringify(payload)
        });

        const data: any = await response.json();

        if (!response.ok) {
            throw new Error((data as any).message || 'Failed to create order');
        }

        // Update order with session ID
        newOrder.paymentSessionId = data.payment_session_id;
        await newOrder.save();

        res.json({ ...data, environment: ENV });

    } catch (error: any) {
        console.error("Error creating order:", error.message);
        res.status(500).json({ error: error.message });
    }
});

router.get('/order-status/:orderId', async (req, res) => {
    try {
        const { orderId } = req.params;

        // Call Cashfree to get latest status
        const response = await fetch(`${BASE_URL}/orders/${orderId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-api-version': '2023-08-01',
                'x-client-id': APP_ID,
                'x-client-secret': SECRET_KEY
            }
        });

        const data: any = await response.json();

        // Update DB
        if (data.order_status) {
            await Order.findOneAndUpdate({ orderId }, { status: data.order_status });
        }

        res.json(data);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
});

router.post('/check-payment-status', async (req, res) => {
    const { orderId } = req.body;
    try {
        const order = await Order.findOne({ orderId });
        if (!order) return res.status(404).json({ message: 'Order not found' });

        // Fetch latest status from Cashfree first
        const response = await fetch(`${BASE_URL}/orders/${orderId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-api-version': '2023-08-01',
                'x-client-id': APP_ID,
                'x-client-secret': SECRET_KEY
            }
        });

        if (response.ok) {
            const data: any = await response.json();
            if (data.order_status) {
                order.status = data.order_status;
                await order.save();
            }
        }

        if (order.status === 'PAID') {
            // Update User
            const user = await User.findOne({ email: order.customerEmail });
            if (user) {
                user.isPaid = true;
                if (order.courseId && !user.enrolledCourses.includes(order.courseId)) {
                    user.enrolledCourses.push(order.courseId);
                }
                await user.save();

                // Send Confirmation Email only if not already sent
                if (!order.emailSent) {
                    try {
                        const transporter = nodemailer.createTransport({
                            service: 'gmail',
                            auth: {
                                user: process.env.EMAIL_USER,
                                pass: process.env.EMAIL_PASS
                            }
                        });

                        const mailOptions = {
                            from: process.env.EMAIL_USER,
                            to: user.email,
                            subject: 'Payment Successful - Welcome to Zerokost!',
                            html: `
                                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px;">
                                    <h2 style="color: #10b981; text-align: center;">Payment Successful!</h2>
                                    <p style="font-size: 16px; color: #333;">Hello ${user.fullName},</p>
                                    <p style="font-size: 16px; color: #333;">Congratulations! Your payment for <strong>${order.courseId}</strong> has been successfully processed.</p>
                                    
                                    <div style="background-color: #f3f4f6; padding: 15px; border-radius: 8px; margin: 20px 0;">
                                        <p style="margin: 5px 0;"><strong>Order ID:</strong> ${orderId}</p>
                                        <p style="margin: 5px 0;"><strong>Amount Paid:</strong> ₹${order.amount}</p>
                                    </div>

                                    <p style="font-size: 16px; color: #333;">You can now log in to your dashboard and start learning.</p>
                                    
                                    <div style="text-align: center; margin: 30px 0;">
                                        <a href="${FRONTEND_URL}/login" style="background-color: #2563eb; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; font-weight: bold;">Login to Dashboard</a>
                                    </div>

                                    <p style="font-size: 14px; color: #666;">If the button doesn't work, copy and paste this link into your browser:</p>
                                    <p style="font-size: 14px; color: #2563eb;">${FRONTEND_URL}/login</p>

                                    <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
                                    <p style="font-size: 12px; color: #999; text-align: center;">&copy; ${new Date().getFullYear()} Zerokost. All rights reserved.</p>
                                </div>
                            `
                        };

                        await transporter.sendMail(mailOptions);

                        // Update Order to reflect email sent
                        order.emailSent = true;
                        await order.save();

                    } catch (emailError) {
                        // Silently fail or log to file system if needed, but removing console log as requested
                    }
                }
            }
            res.json({ message: 'User updated', status: 'PAID', user });
        } else {
            res.json({ message: 'Order not paid', status: order.status });
        }
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
});

export default router;
