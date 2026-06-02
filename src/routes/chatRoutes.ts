import express from 'express';
import { modulesData } from '../data/modules';

const router = express.Router();

router.post('/', async (req, res) => {
    const { query } = req.body;

    if (!query) {
        return res.status(400).json({ message: 'Query is required' });
    }

    try {
        const Groq = require('groq-sdk');
        const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

        const completion = await groq.chat.completions.create({
            messages: [
                {
                    role: "system",
                    content: "You are a helpful AI teaching assistant. Keep your answers **short, concise, and to the point** (max 3-4 sentences). Use bullet points for clarity. Format nicely with Markdown."
                },
                {
                    role: "user",
                    content: query
                }
            ],
            model: "llama-3.3-70b-versatile",
        });

        const answer = completion.choices[0]?.message?.content || "I couldn't generate an answer at the moment.";
        res.json({ answer });

    } catch (error: any) {
        console.error("Groq API Error:", error);
        const errorMessage = error?.error?.message || error.message || "Unknown error";
        res.status(500).json({
            answer: `I'm encountering an error connecting to my AI brain. Details: ${errorMessage}. Please check the API Key.`
        });
    }
});

export default router;
