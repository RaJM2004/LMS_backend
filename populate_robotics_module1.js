const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');
const fs = require('fs');

dotenv.config({ path: path.join(__dirname, '.env') });

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/dashboard';

// Load structured Module 1 content from JSON
const jsonPath = path.join(__dirname, 'src/data/courses/robotics_module1.json');
if (!fs.existsSync(jsonPath)) {
    console.error(`Error: Content file not found at ${jsonPath}`);
    process.exit(1);
}
const module1Data = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));

// Schemas for Course and Module
const mcqSchema = new mongoose.Schema({
    question: { type: String, default: '' },
    options: { type: [String], default: [] },
    correctAnswer: { type: Number, default: 0 },
    explanation: { type: String, default: '' }
}, { _id: false });

const sectionSchema = new mongoose.Schema({
    id: { type: String },
    title: { type: String, required: true },
    content: { type: String, default: '' },
    image: String,
    videoUrl: String,
    pdfUrl: String,
    mcqs: { type: [mcqSchema], default: [] }
}, { _id: false });

const moduleSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    courseId: { type: String, required: true },
    title: { type: String, required: true },
    sections: [sectionSchema],
    sessions: [{
        title: String,
        date: String,
        time: String,
        link: String,
        duration: String,
        isLive: { type: Boolean, default: false }
    }],
    code: { type: String, required: false },
    output: { type: String, required: false },
    mcqs: { type: [mcqSchema], default: [] },
    moduleAssessment: {
        passingScore: { type: Number, default: 70 },
        mcqs: { type: [mcqSchema], default: [] }
    },
    order: { type: Number, required: true }
});

const courseSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    level: { type: String, default: 'Intermediate' },
    rating: { type: String, default: '4.5 (100)' },
    duration: { type: String, default: '4 weeks' },
    enrolled: { type: String, default: '100' },
    price: { type: String, required: true },
    originalPrice: { type: String },
    discount: { type: String },
    desc: { type: String, required: true },
    image: { type: String, required: true },
    color: { type: String, default: 'blue' },
    status: { type: String, default: 'Active' },
    learnings: [{ type: String }],
    videoUrl: { type: String },
    brochureUrl: { type: String },
    modules: [{
        title: { type: String },
        topics: [{ type: String }]
    }],
    faqs: [{
        q: { type: String },
        a: { type: String }
    }],
    createdAt: { type: Date, default: Date.now }
});

const CourseModel = mongoose.models.Course || mongoose.model('Course', courseSchema);
const ModuleModel = mongoose.models.Module || mongoose.model('Module', moduleSchema);

async function populateRoboticsModule1() {
    try {
        console.log('Connecting to MongoDB...');
        await mongoose.connect(MONGO_URI);
        console.log('Connected to MongoDB successfully.');

        // 1. Locate Course: Search for "30 day robotic lab" (id: 'robot-ai')
        console.log('Searching for course "30 day robotic lab"...');
        let course = await CourseModel.findOne({ id: 'robot-ai' });
        if (!course) {
            course = await CourseModel.findOne({ title: { $regex: /30.*day.*robotic/i } });
        }
        if (!course) {
            course = await CourseModel.findOne({ title: { $regex: /30.*day/i } });
        }
        if (!course) {
            course = await CourseModel.findOne({ title: { $regex: /robotics/i } });
        }

        if (!course) {
            console.log('Course not found in DB. Creating new Course document...');
            course = await CourseModel.create({
                id: 'robot-ai',
                title: '30-Day Robotics Lab – From Zero to Robot Builder',
                level: 'Intermediate',
                rating: '4.8 (100)',
                duration: '4 weeks',
                enrolled: '100',
                price: '₹35,000 + GST',
                desc: 'A comprehensive, project-based robotics program covering electronics, sensors, Arduino programming, and autonomous mobile robotics.',
                image: '/robotics_ai.png',
                color: 'teal',
                status: 'Active',
                modules: []
            });
        }

        console.log(`Found Course: "${course.title}" (ID: ${course.id})`);

        // 2. Update Course Modules metadata
        const module1Metadata = {
            title: module1Data.title,
            topics: [
                'Lesson 1 — What is Robotics?',
                'Lesson 2 — Robot Types & Applications',
                'Lesson 3 — Anatomy of a Robot',
                'Lesson 4 — Engineering Design Process'
            ]
        };

        let currentModules = course.modules || [];
        const existingModIndex = currentModules.findIndex(m => m.title && m.title.includes('MODULE 1'));
        if (existingModIndex >= 0) {
            currentModules[existingModIndex] = module1Metadata;
        } else {
            currentModules.unshift(module1Metadata);
        }

        course.modules = currentModules;
        await course.save();
        console.log('Updated Course metadata with Module 1 topics.');

        // 3. Upsert Module 1 document into `modules` collection
        console.log('Upserting Module 1 document into `modules` collection...');
        const targetCourseId = course.id;
        module1Data.courseId = targetCourseId;

        const updatedModule = await ModuleModel.findOneAndUpdate(
            { 
                $or: [
                    { id: module1Data.id },
                    { courseId: targetCourseId, order: 1 }
                ]
            },
            { $set: module1Data },
            { upsert: true, new: true }
        );

        console.log(`\n======================================================`);
        console.log(`SUCCESSFULLY POPULATED MODULE 1 FOR "${course.title}"`);
        console.log(`======================================================`);
        console.log(`  - Module ID: ${updatedModule.id}`);
        console.log(`  - Course ID: ${updatedModule.courseId}`);
        console.log(`  - Module Title: ${updatedModule.title}`);
        console.log(`  - Order: ${updatedModule.order}`);
        console.log(`  - Number of Sections (Lessons): ${updatedModule.sections.length}`);
        updatedModule.sections.forEach((s, idx) => {
            console.log(`    [Lesson ${idx + 1}] "${s.title}"`);
            console.log(`       * Video: ${s.videoUrl || 'None'}`);
            console.log(`       * Level 1 MCQs: ${s.mcqs.length} questions`);
        });
        console.log(`  - Practical Code: Arduino C++ Obstacle Avoidance Rover (${updatedModule.code.split('\n').length} lines)`);
        console.log(`  - Level 2 Comprehensive Assessment: ${updatedModule.moduleAssessment.mcqs.length} MCQs (Passing Score: ${updatedModule.moduleAssessment.passingScore}%)`);
        console.log(`======================================================\n`);

        await mongoose.disconnect();
        console.log('MongoDB connection closed.');
        process.exit(0);
    } catch (error) {
        console.error('Error populating robotics Module 1:', error);
        process.exit(1);
    }
}

populateRoboticsModule1();
