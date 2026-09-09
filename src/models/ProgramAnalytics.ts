import mongoose from 'mongoose';

// Aggregated counter schema
const ProgramAnalyticsSchema = new mongoose.Schema({
    programId: { type: String, required: true, default: 'fde_masterclass', unique: true },
    pageViews: { type: Number, default: 0 },
    brochureDownloads: { type: Number, default: 0 },
    pptDownloads: { type: Number, default: 0 },
    videoViews: { type: Number, default: 0 },
    lastUpdated: { type: Date, default: Date.now }
}, { timestamps: true });

// Event log schema for individual actions
const ProgramEventSchema = new mongoose.Schema({
    programId: { type: String, required: true, default: 'fde_masterclass' },
    eventType: { 
        type: String, 
        required: true, 
        enum: ['page_view', 'brochure_download', 'ppt_download', 'video_view'] 
    },
    ip: { type: String, default: 'unknown' },
    userAgent: { type: String, default: 'unknown' }
}, { timestamps: true });

export const ProgramAnalytics = mongoose.model('ProgramAnalytics', ProgramAnalyticsSchema);
export const ProgramEvent = mongoose.model('ProgramEvent', ProgramEventSchema);
