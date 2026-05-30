import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
    orderId: { type: String, required: true, unique: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    courseId: { type: String },
    amount: { type: Number, required: true },
    currency: { type: String, default: 'INR' },
    status: { type: String, default: 'PENDING' }, // PENDING, PAID, FAILED
    paymentSessionId: { type: String },
    customerEmail: { type: String, index: true },
    customerPhone: { type: String },
    customerName: { type: String },
    emailSent: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now }
});

export const Order = mongoose.model('Order', orderSchema);
