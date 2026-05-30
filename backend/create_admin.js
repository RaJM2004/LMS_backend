const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/dashboard';

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
    completedModules: { type: [String], default: [] },
    certificateId: { type: String },
    role: { type: String, default: 'user', enum: ['user', 'admin'] },
    isPaid: { type: Boolean, default: false }
});

const User = mongoose.model('User', userSchema);

async function createAdmin() {
    try {
        await mongoose.connect(MONGO_URI);
        console.log('MongoDB connected');

        const adminEmail = 'admin@zerokost.com';

        // Check if admin already exists
        let admin = await User.findOne({ email: adminEmail });

        if (admin) {
            console.log('Admin user already exists. Updating role...');
            admin.role = 'admin';
            admin.isPaid = true;
            await admin.save();
        } else {
            console.log('Creating new admin user...');
            admin = new User({
                email: adminEmail,
                fullName: 'System Administrator',
                role: 'admin',
                progress: 0,
                completedModules: [],
                isPaid: true
            });
            await admin.save();
        }

        console.log('Admin user configured successfully:', admin);
    } catch (error) {
        console.error('Error configuring admin:', error);
    } finally {
        await mongoose.disconnect();
        console.log('MongoDB disconnected');
    }
}

createAdmin();
