console.log("Initializing server...");
import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import userRoutes from './routes/userRoutes';


const app = express();
const allowedOrigins = [
    'https://lms-frontend-blue-mu.vercel.app',
    'http://localhost:5173',
    'https://lms-frontend-rouge-eta.vercel.app',
    process.env.FRONTEND_URL
].filter(Boolean);

app.use(cors({
    origin: function (origin, callback) {
        // Allow requests with no origin (like mobile apps or curl requests)
        if (!origin) return callback(null, true);
        if (allowedOrigins.indexOf(origin) === -1 && !allowedOrigins.includes('*')) {
            // If explicit origins are set and match fails, try lenient mode if * is meant to be allowed
            // checking if user just wants simple access:
            return callback(null, true); // Temporarily allow all for debugging
        }
        return callback(null, true);
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json({ limit: '10mb' }));

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/dashboard';

if (!process.env.MONGO_URI) {
    console.warn("WARNING: MONGO_URI environment variable is not defined. Defaulting to localhost.");
}

mongoose.connection.on('error', err => {
    console.error('Mongoose connection-level error:', err);
});

const maskedMongoUri = MONGO_URI.replace(/:([^@]+)@/, ':******@');
console.log(`Connecting to MongoDB URI: ${maskedMongoUri}`);

try {
    mongoose.connect(MONGO_URI)
        .then(() => {
            console.log('MongoDB connected');
            console.log('Database Name:', mongoose.connection.name);
        })
        .catch(err => console.error('MongoDB connection error:', err));
} catch (connectError) {
    console.error('Synchronous Mongoose connection error during startup:', connectError);
}

import courseRoutes from './routes/courseRoutes';
import chatRoutes from './routes/chatRoutes';

import adminRoutes from './routes/adminRoutes';
import codeRoutes from './routes/codeRoutes';
import paymentRoutes from './routes/paymentRoutes';
import certificateRoutes from './routes/certificateRoutes';
import instructorRoutes from './routes/instructorRoutes';

app.get('/', (req, res) => {
    res.send('Server is running');
});

app.use('/api/users', userRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/chat', chatRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/code', codeRoutes);
app.use('/api/payment', paymentRoutes);
app.use('/api/certificate', certificateRoutes);
import assessmentRoutes from './routes/assessmentRoutes';
app.use('/api/assessment', assessmentRoutes);

app.use('/api/instructor', instructorRoutes);


// Temporary Dev Route to Setup User
import { User } from './models/User';
app.get('/api/setup-user/:email', async (req, res) => {
    try {
        const user = await User.findOne({ email: req.params.email });
        if (!user) return res.status(404).json({ message: 'User not found' });

        user.isPaid = true;
        user.role = 'admin'; // Auto-promote to admin for testing
        await user.save();

        res.json({ message: `User ${user.email} updated: isPaid=true, role=admin`, user });
    } catch (error) {
        res.status(500).json({ error: 'Failed to update user' });
    }
});

if (!process.env.VERCEL) {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}

export default app;
