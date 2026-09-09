import mongoose from 'mongoose';

const programRegistrationSchema = new mongoose.Schema({
    email: { type: String, required: true },
    fullName: { type: String, required: true },
    graduationYear: { type: String, required: true },
    jobTitle: { type: String, required: true },
    program: { type: String, required: true, default: 'Forward Deployed Engineering' },
    status: { type: String, default: 'Registered', enum: ['Registered', 'Attended', 'Contacted'] }
}, { timestamps: true });

const ProgramRegistration = mongoose.model('ProgramRegistration', programRegistrationSchema);

export default ProgramRegistration;
