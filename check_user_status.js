const mongoose = require('mongoose');

const MONGO_URI = 'mongodb://localhost:27017/dashboard';

const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    fullName: { type: String },
    isPaid: { type: Boolean, default: false },
    finalAssessment: {
        score: { type: Number, default: 0 },
        passed: { type: Boolean, default: false },
        attempts: { type: Number, default: 0 }
    }
});

// Use a try-catch to handle if model is already compiled
let User;
try {
    User = mongoose.model('User');
} catch (e) {
    User = mongoose.model('User', userSchema);
}

mongoose.connect(MONGO_URI)
    .then(async () => {
        console.log('Connected to MongoDB');
        const user = await User.findOne({ email: 'rajmange94@gmail.com' });
        console.log('User Data:', user);
        process.exit(0);
    })
    .catch(err => {
        console.error('Error:', err);
        process.exit(1);
    });
