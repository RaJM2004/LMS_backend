import mongoose from 'mongoose';

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

export const Course = mongoose.model('Course', courseSchema);
