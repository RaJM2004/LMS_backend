import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { Module } from './src/models/Module';
import { modulesData } from './src/data/modules';

dotenv.config();

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/dashboard';

const TARGET_COURSES = [
    'ml-dl-course',
    'nlp-course',
    'cv-course',
    'agentic-ai-course',
    'gen-ai-course',
    'ai-risk-course',
    'csv-course',
    'med-writing-course',
    'ai-healthcare-course',
    'lifesciences-ai-course',
    'ai-cybersecurity-course',
    'ai-medical-coding-course',
    'pharma-gen-ai-course'
];

async function directSeed() {
    try {
        await mongoose.connect(MONGO_URI);
        console.log('Connected to DB');

        console.log(`Target courses to seed: ${TARGET_COURSES.join(', ')}`);

        // 1. Delete old modules for these courses
        const deleteResult = await Module.deleteMany({ courseId: { $in: TARGET_COURSES } });
        console.log(`Cleared ${deleteResult.deletedCount} old modules for target courses.`);

        // 2. Filter modulesData for these courses
        const newModules = modulesData.filter(m => TARGET_COURSES.includes(m.courseId));
        console.log(`Found ${newModules.length} new modules to seed.`);

        if (newModules.length > 0) {
            await Module.insertMany(newModules);
            console.log("Successfully seeded new modules.");
        } else {
            console.warn("No modules found in data files for target courses!");
        }

        // 3. Optional: Check total count
        const count = await Module.countDocuments();
        console.log(`Total modules in DB: ${count}`);

        await mongoose.disconnect();
        process.exit(0);
    } catch (error) {
        console.error('Seeding Error:', error);
        process.exit(1);
    }
}

directSeed();
