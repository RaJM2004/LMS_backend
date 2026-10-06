import express from 'express';
import { modulesData, modulesDataHindi, modulesDataKannada } from '../data/modules';

const router = express.Router();

import { Module } from '../models/Module';

import { User } from '../models/User';

// Manual Seed Endpoint
// Manual Seed Endpoint (Syncs DB with Seed Data)
router.post('/seed', async (req, res) => {
    try {
        console.log("Manual seeding/syncing triggered...");

        const operations = modulesData.map(module => ({
            updateOne: {
                filter: { id: module.id },
                update: { $set: module },
                upsert: true
            }
        }));

        const result = await Module.bulkWrite(operations);
        console.log(`Synced modules. Matched: ${result.matchedCount}, Modified: ${result.modifiedCount}, Upserted: ${result.upsertedCount}`);

        res.json({
            message: "Database synced with seed data.",
            details: {
                matched: result.matchedCount,
                modified: result.modifiedCount,
                upserted: result.upsertedCount
            },
            success: true
        });
    } catch (error) {
        console.error("Seeding error:", error);
        res.status(500).json({ message: "Seeding failed", error });
    }
});

// Get all courses (modules)
router.get('/', async (req, res) => {
    const lang = req.query.lang as string;
    const email = req.query.email as string;

    try {
        // Enforce only Module 1 for python-ai-course in database
        await Module.deleteMany({ courseId: 'python-ai-course', id: { $ne: 'module-1' } });

        // Fetch modules from DB
        let allModules = await Module.find({}).sort({ order: 1 });

        // Seed DB if empty or missing modules
        const dbModuleIds = new Set(allModules.map(m => m.id));
        const missingModules = modulesData.filter(m => !dbModuleIds.has(m.id));

        if (missingModules.length > 0) {
            console.log(`Found ${missingModules.length} missing modules in DB. Seeding them...`);
            await Module.insertMany(missingModules);
            allModules = await Module.find({}).sort({ order: 1 }); // Refetch
            console.log(`Seeded ${missingModules.length} new modules to DB.`);
        }

        // --- Sync missing MCQs from static data to DB ---
        const dbModulesMap = new Map(allModules.map(m => [m.id, m]));
        const updates = [];

        for (const staticMod of modulesData) {
            const dbMod = dbModulesMap.get(staticMod.id);
            if (dbMod) {
                const dbMcqs = (dbMod as any).mcqs;
                if ((!dbMcqs || dbMcqs.length === 0) && staticMod.mcqs && staticMod.mcqs.length > 0) {
                    updates.push({
                        updateOne: {
                            filter: { id: staticMod.id },
                            update: { $set: { mcqs: staticMod.mcqs, code: staticMod.code, output: staticMod.output } }
                        }
                    });
                }
            }
        }

        if (updates.length > 0) {
            await Module.bulkWrite(updates);
            allModules = await Module.find({}).sort({ order: 1 });
        }

        // Determine Allowed Courses
        let filteredModules = allModules;

        if (req.query.all !== 'true') {
            let allowedCourses: string[] = ['no-code-low-code-ai-agents', 'python-ai-course', 'neural-networks-course', 'cqv-course', 'curaquantis-course', 'robot-ai']; // Default fallback
            if (email) {
                const user = await User.findOne({ email: { $regex: new RegExp(`^${email.trim()}$`, 'i') } });
                if (user && user.enrolledCourses && user.enrolledCourses.length > 0) {
                    const titleToIdMap: Record<string, string> = {
                        'Python Programming for AI': 'python-ai-course',
                        'Neural Networks & Deep Learning': 'neural-networks-course',
                        'Commissioning Qualification and Validation (CQV) Consulting': 'cqv-course',
                        'CuraQuantis Health Clinics — Franchisee Partner Sales & Operations Training Program': 'curaquantis-course',
                        'No Code Low Code AI Agents': 'no-code-low-code-ai-agents',
                        '30-Day Robotics Lab – From Zero to Robot Builder': 'robot-ai',
                        '30-Day Robotics Lab': 'robot-ai',
                        '30 day robotic lab': 'robot-ai',
                        'Robotics 30-Day Hands-on Course': 'robot-ai'
                    };
                    allowedCourses = Array.from(new Set(['no-code-low-code-ai-agents', ...user.enrolledCourses.map(c => titleToIdMap[c] || c)]));
                } else if (user && user.isPaid) {
                    allowedCourses = ['no-code-low-code-ai-agents', 'python-ai-course', 'robot-ai'];
                }
            }

            // Filter modules based on allowed courses
            filteredModules = allModules.filter((m: any) => {
                const cId = m.courseId || 'python-ai-course';
                return allowedCourses.includes(cId);
            });
        }

        // Apply Language Translation to filtered modules
        let resultModules = filteredModules.map(m => (m as any).toObject ? (m as any).toObject() : m);

        if (lang === 'HINDI') {
            resultModules = resultModules.map(dbMod => {
                const staticMod = modulesDataHindi.find(m => m.id === dbMod.id);
                if (staticMod) return { ...dbMod, ...staticMod };
                return dbMod;
            });
        } else if (lang === 'KANNADA') {
            resultModules = resultModules.map(dbMod => {
                const staticMod = modulesDataKannada.find(m => m.id === dbMod.id);
                if (staticMod) return { ...dbMod, ...staticMod };
                return dbMod;
            });
        }

        // Sort modules: Prioritize No Code AI Agents first, then sort by order
        resultModules.sort((a: any, b: any) => {
            const isANoCode = a.courseId === 'no-code-low-code-ai-agents';
            const isBNoCode = b.courseId === 'no-code-low-code-ai-agents';
            if (isANoCode && !isBNoCode) return -1;
            if (!isANoCode && isBNoCode) return 1;
            return (a.order || 0) - (b.order || 0);
        });

        res.json(resultModules);
    } catch (error) {
        console.error("Error fetching modules from DB:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

// Get a specific module by ID
// Get a specific module by ID
router.get('/:id', async (req, res) => {
    const lang = req.query.lang as string;

    try {
        let module = await Module.findOne({ id: req.params.id });

        // Lazy Seed: Check static data if not in DB
        if (!module) {
            const staticM = modulesData.find(m => m.id === req.params.id);
            if (staticM) {
                console.log(`Module ${req.params.id} not in DB, seeding from static...`);
                try {
                    module = await Module.create(staticM);
                } catch (e) {
                    console.error("Error auto-seeding module:", e);
                    module = staticM as any; // Use static even if save fails
                }
            }
        }

        if (!module) {
            return res.status(404).json({ message: 'Module not found' });
        }

        let moduleObj: any = (module as any).toObject ? (module as any).toObject() : module;

        // Language Handling (Legacy Static for now)
        if (lang === 'HINDI') {
            const staticM = modulesDataHindi.find(m => m.id === req.params.id);
            if (staticM) moduleObj = { ...moduleObj, ...staticM };
        } else if (lang === 'KANNADA') {
            const staticM = modulesDataKannada.find(m => m.id === req.params.id);
            if (staticM) moduleObj = { ...moduleObj, ...staticM };
        }

        res.json(moduleObj);
    } catch (error) {
        console.error("Error fetching module from DB:", error);
        res.status(500).json({ message: 'Server error' });
    }
});

// LEVEL 1: Evaluate Section Assessment (10 MCQs)
router.post('/section/evaluate', async (req, res) => {
    try {
        const { email, moduleId, sectionIndex, answers } = req.body;
        // answers: { [questionIndex: number]: number }

        if (!email || !moduleId || sectionIndex === undefined || !answers) {
            return res.status(400).json({ message: "Missing required parameters: email, moduleId, sectionIndex, answers" });
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const module = await Module.findOne({ id: moduleId });
        if (!module) {
            return res.status(404).json({ message: "Module not found" });
        }

        const section = module.sections[sectionIndex];
        if (!section) {
            return res.status(404).json({ message: `Section index ${sectionIndex} not found in module ${moduleId}` });
        }

        const mcqs = section.mcqs || [];
        const totalQuestions = mcqs.length;

        if (totalQuestions === 0) {
            // If section doesn't have MCQs yet, allow passing automatically
            return res.json({
                passed: true,
                score: 0,
                totalQuestions: 0,
                percentage: 100,
                canProceed: true,
                message: "No quiz required for this section."
            });
        }

        // Evaluate deterministically
        let score = 0;
        const feedback: any[] = [];

        mcqs.forEach((mcq, idx) => {
            const userAnswer = answers[idx];
            const isCorrect = userAnswer === mcq.correctAnswer;
            if (isCorrect) score++;

            feedback.push({
                questionIndex: idx,
                correct: isCorrect,
                explanation: mcq.explanation || ''
            });
        });

        const percentage = Math.round((score / totalQuestions) * 100);
        const passingThreshold = 70; // 70% required to advance to next section
        const passed = percentage >= passingThreshold;

        // Persist to user.completedSections if passed
        if (passed) {
            if (!user.completedSections) user.completedSections = [] as any;

            const existingIndex = user.completedSections.findIndex(
                (s: any) => s.moduleId === moduleId && s.sectionIndex === sectionIndex
            );

            if (existingIndex !== -1) {
                user.completedSections[existingIndex].score = score;
                user.completedSections[existingIndex].totalQuestions = totalQuestions;
                user.completedSections[existingIndex].percentage = percentage;
                user.completedSections[existingIndex].passed = true;
                user.completedSections[existingIndex].completedAt = new Date();
            } else {
                user.completedSections.push({
                    moduleId,
                    sectionIndex,
                    score,
                    totalQuestions,
                    percentage,
                    passed: true,
                    completedAt: new Date()
                } as any);
            }

            await user.save();
        }

        res.json({
            passed,
            score,
            totalQuestions,
            percentage,
            passingThreshold,
            canProceed: passed,
            feedback,
            message: passed
                ? "Section assessment passed! You may proceed to the next section."
                : `You scored ${percentage}%. You need at least ${passingThreshold}% to proceed. Please review and try again.`
        });

    } catch (error: any) {
        console.error("Error evaluating section assessment:", error);
        res.status(500).json({ message: "Failed to evaluate section assessment", error: error.message });
    }
});

// LEVEL 2: Evaluate Module-Level Comprehensive Assessment
router.post('/module/evaluate', async (req, res) => {
    try {
        const { email, moduleId, answers } = req.body;
        // answers: { [questionIndex: number]: number }

        if (!email || !moduleId || !answers) {
            return res.status(400).json({ message: "Missing required parameters: email, moduleId, answers" });
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const module = await Module.findOne({ id: moduleId });
        if (!module) {
            return res.status(404).json({ message: "Module not found" });
        }

        // Check if all sections in this module are completed
        const numSections = module.sections.length;
        const userPassedSections = user.completedSections?.filter(
            (s: any) => s.moduleId === moduleId && s.passed
        ) || [];

        if (numSections > 0 && userPassedSections.length < numSections) {
            return res.status(403).json({
                passed: false,
                message: `Please complete all ${numSections} sections of this module before taking the final module assessment.`
            });
        }

        // Use moduleAssessment.mcqs if present, else fallback to module.mcqs
        const mcqs = (module.moduleAssessment && module.moduleAssessment.mcqs && module.moduleAssessment.mcqs.length > 0)
            ? module.moduleAssessment.mcqs
            : (module.mcqs || []);

        const totalQuestions = mcqs.length;
        if (totalQuestions === 0) {
            // Auto pass if no assessment exists
            if (!user.completedModules.includes(moduleId)) {
                user.completedModules.push(moduleId);
                await user.save();
            }
            return res.json({
                passed: true,
                score: 0,
                totalQuestions: 0,
                percentage: 100,
                nextModuleUnlocked: true,
                user
            });
        }

        // Deterministic grading
        let score = 0;
        const feedback: any[] = [];

        mcqs.forEach((mcq, idx) => {
            const userAnswer = answers[idx];
            const isCorrect = userAnswer === mcq.correctAnswer;
            if (isCorrect) score++;

            feedback.push({
                questionIndex: idx,
                correct: isCorrect,
                explanation: mcq.explanation || ''
            });
        });

        const percentage = Math.round((score / totalQuestions) * 100);
        const passingThreshold = module.moduleAssessment?.passingScore || 70;
        const passed = percentage >= passingThreshold;

        if (passed) {
            // Add to completed modules if not already there
            if (!user.completedModules.includes(moduleId)) {
                user.completedModules.push(moduleId);
            }

            // Record in moduleAssessments
            if (!user.moduleAssessments) user.moduleAssessments = [] as any;
            const existingModIdx = user.moduleAssessments.findIndex((m: any) => m.moduleId === moduleId);
            if (existingModIdx !== -1) {
                user.moduleAssessments[existingModIdx].score = score;
                user.moduleAssessments[existingModIdx].totalQuestions = totalQuestions;
                user.moduleAssessments[existingModIdx].percentage = percentage;
                user.moduleAssessments[existingModIdx].passed = true;
                user.moduleAssessments[existingModIdx].completedAt = new Date();
            } else {
                user.moduleAssessments.push({
                    moduleId,
                    score,
                    totalQuestions,
                    percentage,
                    passed: true,
                    completedAt: new Date()
                } as any);
            }

            // Recalculate course progress
            const allCourseModules = await Module.find({ courseId: module.courseId });
            const totalCourseModules = allCourseModules.length || 10;
            const completedCount = allCourseModules.filter(m => user.completedModules.includes(m.id)).length;
            user.progress = Math.round((completedCount / totalCourseModules) * 100);

            await user.save();
        }

        res.json({
            passed,
            score,
            totalQuestions,
            percentage,
            passingThreshold,
            nextModuleUnlocked: passed,
            feedback,
            user,
            message: passed
                ? "Congratulations! You have passed the module assessment and unlocked the next module!"
                : `You scored ${percentage}%. You need at least ${passingThreshold}% to pass this module. Please review the material and retake the assessment.`
        });

    } catch (error: any) {
        console.error("Error evaluating module assessment:", error);
        res.status(500).json({ message: "Failed to evaluate module assessment", error: error.message });
    }
});

export default router;

