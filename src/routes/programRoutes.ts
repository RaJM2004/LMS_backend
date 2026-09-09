import express from 'express';
import ProgramRegistration from '../models/ProgramRegistration';
import { ProgramAnalytics, ProgramEvent } from '../models/ProgramAnalytics';
import nodemailer from 'nodemailer';

const router = express.Router();

// Helper to create appropriate email transporter (Outlook with fallback to Gmail)
function getEmailTransporter() {
    // If Outlook is configured, try Outlook first
    if (process.env.SMTP_USER && process.env.SMTP_PASS) {
        return {
            transporter: nodemailer.createTransport({
                host: process.env.SMTP_HOST || 'smtp.office365.com',
                port: Number(process.env.SMTP_PORT) || 587,
                secure: false, // STARTTLS
                requireTLS: true,
                auth: {
                    user: process.env.SMTP_USER,
                    pass: process.env.SMTP_PASS
                },
                tls: {
                    rejectUnauthorized: false
                }
            }),
            senderEmail: process.env.SMTP_USER
        };
    }
    
    // Fallback to Gmail SMTP
    return {
        transporter: nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER || 'zerokosthealthcare@gmail.com',
                pass: process.env.EMAIL_PASS || 'ffprmbapsvfunxow'
            }
        }),
        senderEmail: process.env.EMAIL_USER || 'zerokosthealthcare@gmail.com'
    };
}

// POST /api/program/register
router.post('/register', async (req, res) => {
    try {
        const { email, fullName, graduationYear, jobTitle, program } = req.body;

        if (!email || !fullName) {
            return res.status(400).json({ error: 'Email and Full Name are required.' });
        }

        // 1. ALWAYS SAVE REAL DATA TO MONGODB DATABASE
        const registration = new ProgramRegistration({
            email,
            fullName,
            graduationYear: graduationYear || 'N/A',
            jobTitle: jobTitle || 'N/A',
            program: program || 'Forward Deployed Engineering'
        });

        await registration.save();

        // 2. SEND CONFIRMATION EMAILS
        try {
            const { transporter, senderEmail } = getEmailTransporter();

            const adminEmail = process.env.ADMIN_EMAIL || 'academy@genquantaa.com';

            const adminMailOptions = {
                from: `"GenQuantaa Academy" <${senderEmail}>`,
                to: adminEmail,
                subject: `New FDE Masterclass Registration: ${fullName}`,
                html: `
                    <h2>New FDE Masterclass Registration Lead</h2>
                    <p><strong>Name:</strong> ${fullName}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Graduation Year:</strong> ${graduationYear}</p>
                    <p><strong>Job Title:</strong> ${jobTitle}</p>
                    <p><strong>Program:</strong> ${program}</p>
                    <p><strong>Registered At:</strong> ${new Date().toLocaleString()}</p>
                `
            };

            const userMailOptions = {
                from: `"GenQuantaa Academy" <${senderEmail}>`,
                to: email,
                subject: `Registration Confirmed: Forward Deployed Engineer (FDE) Masterclass`,
                html: `
                    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 12px;">
                        <h2 style="color: #0f269a;">Welcome to GenQuantaa FDE Masterclass, ${fullName}!</h2>
                        <p style="color: #475569; font-size: 15px; line-height: 1.6;">
                            Thank you for registering for the <strong>Forward Deployed Engineer (FDE) Masterclass</strong> led by <strong>Ashwin Kumar</strong>.
                        </p>
                        <div style="background-color: #f8fafc; padding: 15px; border-radius: 8px; margin: 20px 0;">
                            <h4 style="margin-top: 0; color: #1e293b;">📅 Masterclass Details</h4>
                            <p style="margin: 5px 0;"><strong>Date:</strong> 30th Sept 2026 (Wed)</p>
                            <p style="margin: 5px 0;"><strong>Time:</strong> 7:30 PM - 10:00 PM IST</p>
                            <p style="margin: 5px 0;"><strong>Instructor:</strong> Ashwin Kumar (Ex-Palantir & Systems Architect)</p>
                        </div>
                        <p style="color: #475569;">Here are your instant access resources:</p>
                        <ul>
                            <li><a href="https://genquantaa.com/FDE%20Brochure.pdf" style="color: #0f269a; font-weight: bold;">Download FDE Course Brochure PDF</a></li>
                            <li><a href="https://genquantaa.com/FDE%20PPT.pdf" style="color: #7c3aed; font-weight: bold;">View FDE Presentation PPT Deck</a></li>
                            <li><a href="https://youtu.be/KehyaPw5Mmg" style="color: #d97706; font-weight: bold;">Watch Masterclass Recorded Video</a></li>
                        </ul>
                        <p style="color: #94a3b8; font-size: 12px; margin-top: 30px;">
                            GenQuantaa Academy — Transforming SDEs into High-Impact Forward Deployed Engineers.
                        </p>
                    </div>
                `
            };

            try {
                await Promise.all([
                    transporter.sendMail(adminMailOptions),
                    transporter.sendMail(userMailOptions)
                ]);
                console.log(`Emails successfully sent to ${email} and ${adminEmail}`);
            } catch (smtpErr) {
                console.warn("Primary SMTP failed, attempting fallback Gmail transporter...", smtpErr);
                // Fallback Transporter using verified Gmail credentials
                const fallbackTransporter = nodemailer.createTransport({
                    service: 'gmail',
                    auth: {
                        user: 'zerokosthealthcare@gmail.com',
                        pass: 'ffprmbapsvfunxow'
                    }
                });

                adminMailOptions.from = `"GenQuantaa Academy" <zerokosthealthcare@gmail.com>`;
                userMailOptions.from = `"GenQuantaa Academy" <zerokosthealthcare@gmail.com>`;

                await Promise.all([
                    fallbackTransporter.sendMail(adminMailOptions),
                    fallbackTransporter.sendMail(userMailOptions)
                ]);
                console.log(`Fallback emails successfully sent to ${email} and ${adminEmail}`);
            }
        } catch (emailErr) {
            console.error("Email notification notice (Data is saved in DB):", emailErr);
        }

        return res.status(201).json({
            message: 'Registration successful!',
            registration
        });
    } catch (error: any) {
        console.error('Program registration error:', error);
        return res.status(500).json({ error: error.message || 'Failed to submit registration.' });
    }
});

// GET /api/program/registrations (Admin inspection endpoint)
router.get('/registrations', async (req, res) => {
    try {
        const list = await ProgramRegistration.find().sort({ createdAt: -1 });
        return res.json(list);
    } catch (error: any) {
        return res.status(500).json({ error: error.message });
    }
});

// POST /api/program/track (Event tracking for brochure, PPT, video, page views)
router.post('/track', async (req, res) => {
    try {
        const { eventType } = req.body;
        const validEvents = ['page_view', 'brochure_download', 'ppt_download', 'video_view'];

        if (!eventType || !validEvents.includes(eventType)) {
            return res.status(400).json({ error: 'Invalid eventType' });
        }

        const fieldMapping: Record<string, string> = {
            'page_view': 'pageViews',
            'brochure_download': 'brochureDownloads',
            'ppt_download': 'pptDownloads',
            'video_view': 'videoViews'
        };

        const fieldToInc = fieldMapping[eventType];

        // Increment aggregate counter atomically
        const analytics = await ProgramAnalytics.findOneAndUpdate(
            { programId: 'fde_masterclass' },
            { 
                $inc: { [fieldToInc]: 1 },
                $set: { lastUpdated: new Date() }
            },
            { new: true, upsert: true }
        );

        // Log individual event entry with IP and User-Agent
        const clientIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress || 'unknown';
        const userAgent = req.headers['user-agent'] || 'unknown';

        await ProgramEvent.create({
            programId: 'fde_masterclass',
            eventType,
            ip: Array.isArray(clientIp) ? clientIp[0] : clientIp,
            userAgent
        });

        return res.json({
            success: true,
            eventType,
            analytics
        });
    } catch (error: any) {
        console.error('Track event error:', error);
        return res.status(500).json({ error: error.message });
    }
});

// GET /api/program/analytics (Retrieve view/download statistics & registration totals)
router.get('/analytics', async (req, res) => {
    try {
        let analytics = await ProgramAnalytics.findOne({ programId: 'fde_masterclass' });
        if (!analytics) {
            analytics = await ProgramAnalytics.create({ programId: 'fde_masterclass' });
        }

        const totalRegistrations = await ProgramRegistration.countDocuments();

        return res.json({
            pageViews: analytics.pageViews || 0,
            brochureDownloads: analytics.brochureDownloads || 0,
            pptDownloads: analytics.pptDownloads || 0,
            videoViews: analytics.videoViews || 0,
            totalRegistrations,
            lastUpdated: analytics.lastUpdated
        });
    } catch (error: any) {
        console.error('Fetch analytics error:', error);
        return res.status(500).json({ error: error.message });
    }
});

export default router;
