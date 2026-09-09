import express from 'express';
import ProgramRegistration from '../models/ProgramRegistration';
import { ProgramAnalytics, ProgramEvent } from '../models/ProgramAnalytics';
import { Resend } from 'resend';

const router = express.Router();

// Resend client — uses HTTPS port 443, works perfectly on Render
const resend = new Resend(process.env.RESEND_API_KEY);

// From address: use verified domain sender if available, else Resend's shared test sender
const FROM_ADDRESS = 'GenQuantaa Academy <academy@academy.genquantaa.com>';
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'academy@genquantaa.com';

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

        // Respond immediately so the registration UI succeeds instantly
        res.status(201).json({
            message: 'Registration successful!',
            registration
        });

        // 2. DISPATCH EMAILS ASYNCHRONOUSLY VIA RESEND (HTTPS, never blocked by Render)
        (async () => {
            try {
                const [userResult, adminResult] = await Promise.all([
                    // Confirmation email to the registrant
                    resend.emails.send({
                        from: FROM_ADDRESS,
                        to: [email],
                        subject: 'Registration Confirmed: Forward Deployed Engineer (FDE) Masterclass',
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
                                    <p style="margin: 5px 0;"><strong>Instructor:</strong> Ashwin Kumar (Ex-Palantir &amp; Systems Architect)</p>
                                </div>
                                <p style="color: #475569;">Here are your instant access resources:</p>
                                <table width="100%" cellpadding="0" cellspacing="0" style="margin-top: 10px;">
                                    <tr>
                                        <td style="padding: 6px 0;">
                                            <a href="https://academy.genquantaa.com/FDE%20Brochure.pdf"
                                               style="display: block; background: #0f269a; color: #ffffff; text-decoration: none; padding: 12px 20px; border-radius: 8px; font-weight: bold; font-size: 15px; text-align: center;">
                                                📄 Download FDE Course Brochure (PDF)
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 6px 0;">
                                            <a href="https://academy.genquantaa.com/FDE%20PPT.pdf"
                                               style="display: block; background: #7c3aed; color: #ffffff; text-decoration: none; padding: 12px 20px; border-radius: 8px; font-weight: bold; font-size: 15px; text-align: center;">
                                                📊 View FDE Presentation Deck (PPT)
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 6px 0;">
                                            <a href="https://youtu.be/KehyaPw5Mmg"
                                               style="display: block; background: #d97706; color: #ffffff; text-decoration: none; padding: 12px 20px; border-radius: 8px; font-weight: bold; font-size: 15px; text-align: center;">
                                                🎬 Watch Masterclass Recorded Video
                                            </a>
                                        </td>
                                    </tr>
                                </table>
                                <p style="color: #94a3b8; font-size: 12px; margin-top: 30px;">
                                    GenQuantaa Academy — Transforming SDEs into High-Impact Forward Deployed Engineers.
                                </p>
                            </div>
                        `
                    }),

                    // Lead notification to admin
                    resend.emails.send({
                        from: FROM_ADDRESS,
                        to: [ADMIN_EMAIL],
                        subject: `New FDE Masterclass Registration: ${fullName}`,
                        html: `
                            <h2>New FDE Masterclass Registration Lead</h2>
                            <p><strong>Name:</strong> ${fullName}</p>
                            <p><strong>Email:</strong> ${email}</p>
                            <p><strong>Graduation Year:</strong> ${graduationYear || 'N/A'}</p>
                            <p><strong>Job Title:</strong> ${jobTitle || 'N/A'}</p>
                            <p><strong>Program:</strong> ${program || 'Forward Deployed Engineering'}</p>
                            <p><strong>Registered At:</strong> ${new Date().toLocaleString()}</p>
                        `
                    })
                ]);

                if (userResult.error || adminResult.error) {
                    console.warn('Resend partial error — user:', userResult.error, '| admin:', adminResult.error);
                } else {
                    console.log(`Resend emails sent successfully — user: ${email}, admin: ${ADMIN_EMAIL}`);
                }
            } catch (emailErr) {
                console.error('Resend email dispatch error:', emailErr);
            }
        })();

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
