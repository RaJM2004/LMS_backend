import express from 'express';
import TrainerApplication from '../models/TrainerApplication';
import nodemailer from 'nodemailer';

const router = express.Router();

router.post('/apply', async (req, res) => {
    try {
        const {
            firstName,
            lastName,
            email,
            phone,
            companyName,
            companyDescription,
            companyWebsite,
            numberOfEmployees,
            programOfInterest,
            regions,
            specialization,
            sharedCustomers,
            partnershipInterest,
            corporateSponsor
        } = req.body;

        // Validation
        if (!firstName || !lastName || !email || !phone || !programOfInterest || !partnershipInterest) {
            return res.status(400).json({ error: 'Please provide all required fields' });
        }

        const newApplication = new TrainerApplication({
            firstName,
            lastName,
            email,
            phone,
            companyName,
            companyDescription,
            companyWebsite,
            numberOfEmployees,
            programOfInterest,
            regions,
            specialization,
            sharedCustomers,
            partnershipInterest,
            corporateSponsor
        });

        await newApplication.save();

        // Send Email using NodeMailer
        try {
            const transporter = nodemailer.createTransport({
                service: 'gmail', // or use host/port if using a different provider
                auth: {
                    user: process.env.SMTP_USER,
                    pass: process.env.SMTP_PASS
                }
            });

            const mailOptions = {
                from: process.env.SMTP_USER,
                to: 'academy@genquantaa.com',
                subject: `New Trainer Application: ${firstName} ${lastName}`,
                html: `
                    <h2>New Trainer / Partner Application</h2>
                    <p><strong>Name:</strong> ${firstName} ${lastName}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Phone:</strong> ${phone}</p>
                    <p><strong>Company:</strong> ${companyName || 'N/A'}</p>
                    <p><strong>Program of Interest:</strong> ${programOfInterest}</p>
                    <p><strong>Partnership Interest:</strong> ${partnershipInterest}</p>
                    <p>Please check the admin dashboard for full details.</p>
                `
            };

            // Only attempt to send if SMTP credentials are provided, to prevent server crash on dev environment
            if (process.env.SMTP_USER && process.env.SMTP_PASS) {
                await transporter.sendMail(mailOptions);
            } else {
                console.warn('SMTP credentials not provided in .env, skipping email notification.');
            }
        } catch (emailError) {
            console.error('Error sending email notification:', emailError);
            // We don't fail the request if email fails, as the data is saved
        }

        res.status(201).json({ message: 'Application submitted successfully', application: newApplication });

    } catch (error: any) {
        console.error('Error in trainer application:', error);
        res.status(500).json({ error: error.message || 'Internal Server Error' });
    }
});

export default router;
