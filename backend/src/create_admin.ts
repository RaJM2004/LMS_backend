import mongoose from 'mongoose';
import { User } from './models/User';
import dotenv from 'dotenv';

dotenv.config();

const createAdmin = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/dashboard');
        console.log('Connected to MongoDB...');

        const adminEmail = 'admin@zerokost.com';

        let user = await User.findOne({ email: adminEmail });

        if (user) {
            user.role = 'admin';
            user.isPaid = true; // Admins should have access
            console.log('Updating existing user to admin...');
        } else {
            user = new User({
                email: adminEmail,
                fullName: 'System Admin',
                role: 'admin',
                isPaid: true,
                progress: 0,
                completedModules: []
            });
            console.log('Creating new admin user...');
        }

        await user.save();
        console.log(`Admin user configured successfully!`);
        console.log(`Email: ${adminEmail}`);
        console.log(`Role: ${user.role}`);

        process.exit(0);
    } catch (error) {
        console.error('Error creating admin:', error);
        process.exit(1);
    }
};

createAdmin();
