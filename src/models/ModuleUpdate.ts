import mongoose from 'mongoose';

const moduleUpdateSchema = new mongoose.Schema({
    moduleId: { type: String, required: true },
    courseId: { type: String, required: true },
    title: { type: String, required: true },
    instructorEmail: { type: String, required: true },
    order: { type: Number },
    updates: {
        sections: [{
            title: String,
            content: String,
            image: String,
            videoUrl: String,
            pdfUrl: String
        }],
        sessions: [{
            title: String,
            date: String,
            time: String,
            link: String,
            duration: String,
            isLive: { type: Boolean, default: false }
        }],
        code: String,
        output: String,
        mcqs: [{
            question: String,
            options: [String],
            correctAnswer: Number
        }]
    },
    status: { type: String, enum: ['pending', 'approved', 'rejected'], default: 'pending' },
    submittedAt: { type: Date, default: Date.now },
    adminComment: { type: String }
});

export const ModuleUpdate = mongoose.model('ModuleUpdate', moduleUpdateSchema);
