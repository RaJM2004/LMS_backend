import express from 'express';
import TrainerApplication from '../models/TrainerApplication';
import { Resend } from 'resend';

const router = express.Router();
const resend = new Resend(process.env.RESEND_API_KEY);
const FROM_ADDRESS = 'GenQuantaa Academy <academy@academy.genquantaa.com>';
const ADMIN_EMAIL = 'academy@genquantaa.com';

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

        // Send admin notification via Resend (HTTPS, never blocked by Render)
        (async () => {
            try {
                const { error } = await resend.emails.send({
                    from: FROM_ADDRESS,
                    to: [ADMIN_EMAIL],
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
                });

                if (error) {
                    console.error('Resend error (trainer application):', error);
                } else {
                    console.log(`Trainer application notification sent for ${firstName} ${lastName}`);
                }
            } catch (emailError) {
                console.error('Error sending trainer application email:', emailError);
            }
        })();

        res.status(201).json({ message: 'Application submitted successfully', application: newApplication });

    } catch (error: any) {
        console.error('Error in trainer application:', error);
        res.status(500).json({ error: error.message || 'Internal Server Error' });
    }
});

export default router;
