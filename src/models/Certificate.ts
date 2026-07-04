import mongoose from 'mongoose';

const certificateSchema = new mongoose.Schema({
    certificateId: { type: String, required: true, unique: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    studentName: { type: String, required: true },
    courseName: { type: String, required: true },
    courseId: { type: String },
    issueDate: { type: Date, default: Date.now },
});

export const Certificate = mongoose.model('Certificate', certificateSchema);
