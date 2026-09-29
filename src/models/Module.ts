import mongoose from 'mongoose';

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
    // LEVEL 1: 10 MCQs per section pre-generated and stored
    mcqs: { type: [mcqSchema], default: [] }
}, { _id: false });

const moduleSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    courseId: { type: String, default: 'python-ai-course' },
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
    // Legacy / general module MCQs
    mcqs: { type: [mcqSchema], default: [] },
    // LEVEL 2: Module-Level Comprehensive Assessment (Pre-generated and saved)
    moduleAssessment: {
        passingScore: { type: Number, default: 70 }, // Passing percentage (default 70%)
        mcqs: { type: [mcqSchema], default: [] }
    },
    order: { type: Number, required: true }
});

export const Module = mongoose.model('Module', moduleSchema);
