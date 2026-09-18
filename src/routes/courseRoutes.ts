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
            let allowedCourses: string[] = ['python-ai-course']; // Default fallback
            if (email) {
                const user = await User.findOne({ email });
                if (user && user.enrolledCourses && user.enrolledCourses.length > 0) {
                    const titleToIdMap: Record<string, string> = {
                        'Python Programming for AI': 'python-ai-course',
                        'Neural Networks & Deep Learning': 'neural-networks-course',
                        'Commissioning Qualification and Validation (CQV) Consulting': 'cqv-course',
                        'CuraQuantis Health Clinics — Franchisee Partner Sales & Operations Training Program': 'curaquantis-course'
                    };
                    allowedCourses = user.enrolledCourses.map(c => titleToIdMap[c] || c);
                } else if (user && user.isPaid) {
                    allowedCourses = ['python-ai-course'];
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

        // Sort by order
        resultModules.sort((a: any, b: any) => (a.order || 0) - (b.order || 0));

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

export default router;
