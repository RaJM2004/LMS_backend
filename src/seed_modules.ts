import mongoose from 'mongoose';
import { Module } from './models/Module';
import { modulesData } from './data/modules';
import dotenv from 'dotenv';

dotenv.config();

const seedModules = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/dashboard');
        console.log('Connected to MongoDB...');

        // Optional: Clear existing modules if you want a fresh start
        // await Module.deleteMany({}); 

        for (const mod of modulesData) {
            await Module.findOneAndUpdate({ id: mod.id }, mod, { upsert: true, new: true });
            console.log(`Seeded/Updated: ${mod.title}`);
        }

        console.log('All static modules seeded to MongoDB!');
        process.exit(0);
    } catch (error) {
        console.error('Error seeding modules:', error);
        process.exit(1);
    }
};

seedModules();
