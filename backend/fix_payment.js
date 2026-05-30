const mongoose = require('mongoose');

const MONGO_URI = 'mongodb://localhost:27017/dashboard';

const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    isPaid: { type: Boolean, default: false }
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
        const res = await User.updateOne({ email: 'rajmange94@gmail.com' }, { $set: { isPaid: true } });
        console.log('Update Result:', res);
        process.exit(0);
    })
    .catch(err => {
        console.error('Error:', err);
        process.exit(1);
    });
