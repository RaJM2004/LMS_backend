import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    fullName: { type: String },
    state: { type: String },
    language: { type: String },
    dob: { type: String },
    gender: { type: String },
    subUsers: [{
        fullName: String,
        state: String,
        language: String,
        dob: String,
        gender: String
    }],
    progress: { type: Number, default: 0 },
    completedModules: { type: [String], default: [] }, // Array of Module IDs
    enrolledCourses: { type: [String], default: [] }, // Array of Course IDs
    quizScores: {
        type: [{
            moduleId: String,
            score: Number,
            totalQuestions: Number,
            percentage: Number,
            attemptedAt: { type: Date, default: Date.now }
        }],
        default: []
    },
    certificateId: { type: String },
    role: { type: String, default: 'user', enum: ['user', 'admin', 'instructor'] },
    referredBy: { type: String },
    isPaid: { type: Boolean, default: false },
    finalAssessment: { // DEPRECATED: Use courseAssessments instead
        score: { type: Number, default: 0 },
        passed: { type: Boolean, default: false },
        attempts: { type: Number, default: 0 }
    },
    courseAssessments: [{
        courseId: { type: String, required: true },
        score: { type: Number, default: 0 },
        passed: { type: Boolean, default: false },
        attempts: { type: Number, default: 0 },
        certificateId: { type: String },
        date: { type: Date, default: Date.now }
    }]
});

export const User = mongoose.model('User', userSchema);
