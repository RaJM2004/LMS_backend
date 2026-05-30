import express from 'express';
import { User } from '../models/User';
import { Module } from '../models/Module';

const router = express.Router();
const Groq = require('groq-sdk');

// Generate Assessment Questions
router.get('/generate', async (req, res) => {
    try {
        const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
        const { courseId } = req.query; // Ensure request sends this
        console.log(`Generating assessment questions for course: ${courseId || 'General'}...`);

        // Fetch some module context to make questions relevant
        const query = courseId ? { courseId: courseId } : {};
        const modules = await Module.find(query).limit(5);
        const topics = modules.map(m => m.title).join(", ");

        // Improve prompt with course context
        const subject = courseId
            ? `the course "${courseId.toString().replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}" covering: ${topics}`
            : `a course covering: ${topics || "Python Basics, AI, and Machine Learning"}`;

        const prompt = `
            You are an expert instructor. Create a final assessment for ${subject}.
            
            Generate exactly 10 multiple-choice questions.
            Verify that your output is a valid JSON array of objects.
            Each object must have:
            - "id": number (1-10)
            - "question": string
            - "options": array of 4 strings
            
            Do NOT include the answer key in this output. I want the student to answer them first.
            Ensure the JSON is raw and not wrapped in markdown code blocks.
        `;

        const completion = await groq.chat.completions.create({
            messages: [{ role: "user", content: prompt }],
            model: "llama-3.3-70b-versatile",
            temperature: 0.7,
        });

        let content = completion.choices[0]?.message?.content || "[]";
        // Clean up markdown if present
        content = content.replace(/```json/g, '').replace(/```/g, '').trim();

        const questions = JSON.parse(content);
        res.json(questions);

    } catch (error) {
        console.error("Error generating assessment:", error);
        res.status(500).json({ message: "Failed to generate assessment" });
    }
});

// Submit and Grade Assessment
router.post('/submit', async (req, res) => {
    try {
        const { email, questions, answers, courseId } = req.body;
        // answers: { questionId: number, selectedOption: string }[]

        if (!email || !questions || !answers) {
            return res.status(400).json({ message: "Missing required fields" });
        }

        const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
        console.log(`Grading assessment for ${email} in course ${courseId}...`);

        const prompt = `
            You are a strict automated grader.
            
            Here are 10 multiple-choice questions and the student's selected answers.
            
            Questions: ${JSON.stringify(questions)}
            Student Answers: ${JSON.stringify(answers)}
            
            Task:
            1. Determine the correct answer for each question based on your expert knowledge.
            2. Compare the student's answer to the correct answer.
            3. Calculate the final percentage score (0-100).
            
            Return ONLY a JSON object with this structure:
            {
                "score": number,
                "passed": boolean (true if score >= 85),
                "feedback": "string summary of performance"
            }
            Do not provide any other text.
            If courseId is provided, ensure questions align with it contextually if possible, but mainly grade based on logic.
        `;

        const completion = await groq.chat.completions.create({
            messages: [{ role: "user", content: prompt }],
            model: "llama-3.3-70b-versatile",
            temperature: 0, // Deterministic
        });

        let content = completion.choices[0]?.message?.content || "{}";
        content = content.replace(/```json/g, '').replace(/```/g, '').trim();
        const result = JSON.parse(content);

        // --- STRICT SCORING ENFORCEMENT ---
        // Ensure passed is only true if score >= 85, regardless of what LLM thinks
        result.passed = result.score >= 85;

        // Update User Model
        const user = await User.findOne({ email });
        if (user) {
            // New Multi-Course Logic
            if (courseId) {
                const anyUser = user as any;
                if (!anyUser.courseAssessments) anyUser.courseAssessments = [];

                const existingIndex = anyUser.courseAssessments.findIndex((a: any) => a.courseId === courseId);

                const attempts = existingIndex !== -1 ? (anyUser.courseAssessments[existingIndex].attempts + 1) : 1;

                if (existingIndex !== -1) {
                    // Update existing - Use property assignment to avoid subdocument replacement issues
                    anyUser.courseAssessments[existingIndex].score = result.score;
                    anyUser.courseAssessments[existingIndex].passed = result.passed;
                    anyUser.courseAssessments[existingIndex].attempts = attempts;
                    anyUser.courseAssessments[existingIndex].date = new Date();
                } else {
                    // Add new
                    anyUser.courseAssessments.push({
                        courseId,
                        score: result.score,
                        passed: result.passed,
                        attempts: attempts,
                        date: new Date()
                    });
                }
            } else {
                // Fallback if no courseId - treat as default or legacy behavior
                // We don't want to break things if frontend forgets courseId
            }

            // Fallback: Update legacy field for backward compatibility 
            user.finalAssessment = {
                score: result.score,
                passed: result.passed, // Now 85+
                attempts: (user.finalAssessment?.attempts || 0) + 1
            };

            await user.save();
        }

        res.json(result);

    } catch (error) {
        console.error("Error grading assessment:", error);
        res.status(500).json({ message: "Failed to grade assessment" });
    }
});

export default router;
