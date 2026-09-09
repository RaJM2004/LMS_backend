import mongoose from 'mongoose';

const trainerApplicationSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    companyName: { type: String },
    companyDescription: { type: String },
    companyWebsite: { type: String },
    numberOfEmployees: { type: String },
    programOfInterest: { type: String, required: true },
    regions: [{ type: String }],
    specialization: { type: String },
    sharedCustomers: { type: String },
    partnershipInterest: { type: String, required: true },
    corporateSponsor: { type: String },
    status: { type: String, default: 'Pending', enum: ['Pending', 'Reviewed', 'Accepted', 'Rejected'] }
}, { timestamps: true });

const TrainerApplication = mongoose.model('TrainerApplication', trainerApplicationSchema);

export default TrainerApplication;
