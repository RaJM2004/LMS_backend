import mongoose from 'mongoose';

const moduleSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    courseId: { type: String, default: 'python-ai-course' },
    title: { type: String, required: true },
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
    code: { type: String, required: false },
    output: { type: String, required: false },
    mcqs: [{
        question: String,
        options: [String],
        correctAnswer: Number
    }],
    order: { type: Number, required: true }
});

export const Module = mongoose.model('Module', moduleSchema);
