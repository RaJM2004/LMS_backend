import express from 'express';
import { Certificate } from '../models/Certificate';
import { User } from '../models/User';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

// Verify Certificate
router.get('/verify/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const certificate = await Certificate.findOne({ certificateId: id });

        if (!certificate) {
            return res.status(404).json({ valid: false, message: 'Certificate not found' });
        }

        res.json({
            valid: true,
            data: certificate
        });
    } catch (error) {
        console.error('Error verifying certificate:', error);
        res.status(500).json({ valid: false, message: 'Server error' });
    }
});

// Issue Certificate (Idempotent: returns existing if already issued for user+course)
router.post('/issue', async (req, res) => {
    try {
        console.log("Certificate Issue Request Body:", req.body);
        const { email, courseName, courseId } = req.body;

        if (!email || !courseName) {
            console.log("Missing email or courseName");
            return res.status(400).json({ message: 'Email and Course Name are required' });
        }

        // Use safe regex for email lookup
        const user = await User.findOne({ email: { $regex: new RegExp(`^${email.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}$`, 'i') } });

        if (!user) {
            console.log(`Certificate Issue: User not found for email '${email}'`);
            return res.status(404).json({ message: 'User not found' });
        }
        console.log("User found for certificate issuance:", user._id);

        // --- PASS VERIFICATION ---
        // Ensure user has actually passed with 85%+ for this specific course
        const assessment = user.courseAssessments?.find((a: any) => a.courseId === courseId);
        const legacyPassed = (courseId === 'python-ai-course' || !courseId) && user.finalAssessment?.passed;

        if (!assessment?.passed && !legacyPassed) {
            console.warn(`Attempted to issue certificate for ${email} but they haven't passed ${courseId || courseName}`);
            return res.status(403).json({ message: 'Assessment not passed or score below 85%.' });
        }

        // Check if already issued
        // Prefer courseId if available, fall back to unique courseName per user
        let query: any = { userId: user._id };
        if (courseId) {
            query.courseId = courseId;
        } else {
            query.courseName = courseName;
        }

        let certificate = await Certificate.findOne(query);

        if (certificate) {
            console.log("Existing certificate found:", certificate.certificateId);

            // Update User model (courseAssessments & legacy)
            let updated = false;

            // 1. Update legacy field (always points to latest viewed/issued)
            if (user.certificateId !== certificate.certificateId) {
                user.certificateId = certificate.certificateId;
                updated = true;
            }

            // 2. Update specific course assessment
            if (courseId && user.courseAssessments) {
                const assessmentIndex = user.courseAssessments.findIndex((a: any) => a.courseId === courseId);
                if (assessmentIndex !== -1) {
                    if (user.courseAssessments[assessmentIndex].certificateId !== certificate.certificateId) {
                        user.courseAssessments[assessmentIndex].certificateId = certificate.certificateId;
                        updated = true;
                    }
                } else {
                    // Start tracking if not present (unlikely if they passed, but safe fallback)
                    user.courseAssessments.push({
                        courseId,
                        certificateId: certificate.certificateId,
                        passed: true,
                        score: 0, // Unknown
                        attempts: 0,
                        date: new Date()
                    });
                    updated = true;
                }
            }

            if (updated) await user.save();

            return res.json({ success: true, certificate });
        }

        // Create new
        const certificateId = `QX-${uuidv4().substring(0, 8).toUpperCase()}`; // Example format: QX-12345678
        const studentName = user.fullName || email.split('@')[0];

        console.log("Creating new certificate with:", { certificateId, userId: user._id, studentName, courseName, courseId });

        try {
            certificate = await Certificate.create({
                certificateId,
                userId: user._id,
                studentName,
                courseName,
                courseId: courseId || undefined,
                issueDate: new Date()
            });
            console.log("Certificate created successfully in DB:", certificate);

            // Update User model to cache it
            user.certificateId = certificateId; // Legacy latest

            if (courseId) {
                const anyUser = user as any;
                if (!anyUser.courseAssessments) anyUser.courseAssessments = [];
                const assessmentIndex = anyUser.courseAssessments.findIndex((a: any) => a.courseId === courseId);

                if (assessmentIndex !== -1) {
                    anyUser.courseAssessments[assessmentIndex].certificateId = certificateId;
                } else {
                    anyUser.courseAssessments.push({
                        courseId,
                        certificateId,
                        passed: true,
                        score: 0,
                        attempts: 1,
                        date: new Date()
                    });
                }
            }

            await user.save();

        } catch (createError) {
            console.error("Error specifically during Certificate.create:", createError);
            throw createError;
        }

        res.json({ success: true, certificate });

    } catch (error) {
        console.error('Error issuing certificate:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

import { sendEmail } from '../utils/emailService';

// Send Certificate Email
router.post('/email', async (req, res) => {
    try {
        const { email, courseName, studentName, certificateId, imageData, courseId } = req.body;

        if (!email || !courseName || !studentName || !certificateId) {
            return res.status(400).json({ message: 'Missing required fields' });
        }

        console.log(`Sending certificate email to ${email} for course ${courseId || courseName}`);

        // Construct message
        const downloadLink = `https://quantxai.com/verify/${certificateId}`; // Main View/Download Link
        const verificationLink = `https://quantxai.com/verify`; // General verification page

        const emailMessage = `Dear ${studentName},\n\nCongratulations on successfully completing the course "${courseName}"!\n\nYour certificate has been generated and verified.\n\nCertificate ID: ${certificateId}\n\nView and Download Your Certificate:\n${downloadLink}\n\nVerify Authenticity:\nYou can verify this certificate at any time by visiting:\n${verificationLink}\nand entering your Certificate ID.\n\nBest regards,\nGenesys Quantis Team`;

        // Attempt to send email
        // Note: imageData is base64 string. We pass it, though helper might not fully utilize it as attachment depending on service setup.
        // For robust attachments, use imageData to generate file or embed.

        const result = await sendEmail(email, emailMessage, imageData, `Certificate_${certificateId}.png`, 'template_73rhufh', {
            student_name: studentName,
            course_name: courseName,
            certificate_id: certificateId,
            certificate_link: downloadLink,
            verify_link: verificationLink,
            company_name: "Genesys Quantis",
            company_email: "info@quant-xai.com",
            logo_url: "https://your-public-bucket.com/logo.png" // Replace with actual hosted logo if needed
        });

        if (result.success) {
            res.json({ success: true, message: 'Email sent successfully' });
        } else {
            console.error("Email sending failed:", result.error);
            res.status(500).json({ success: false, message: 'Failed to send email', error: result.error });
        }

    } catch (error) {
        console.error('Error in /email route:', error);
        res.status(500).json({ message: 'Server error processing email request' });
    }
});

export default router;
