const mongoose = require('mongoose');

const MONGO_URI = 'mongodb://localhost:27017/dashboard';

const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true }
});

const certificateSchema = new mongoose.Schema({
    certificateId: { type: String, required: true, unique: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    studentName: { type: String, required: true },
    courseName: { type: String, required: true }
});

let User, Certificate;
try {
    User = mongoose.model('User');
} catch (e) {
    User = mongoose.model('User', userSchema);
}
try {
    Certificate = mongoose.model('Certificate');
} catch (e) {
    Certificate = mongoose.model('Certificate', certificateSchema);
}

mongoose.connect(MONGO_URI)
    .then(async () => {
        console.log('Connected to MongoDB');
        const user = await User.findOne({ email: 'rajmange94@gmail.com' });
        if (!user) {
            console.log('User not found');
            process.exit(0);
        }
        console.log('User ID:', user._id);

        const certs = await Certificate.find({ userId: user._id });
        console.log('Certificates:', certs);
        process.exit(0);
    })
    .catch(err => {
        console.error('Error:', err);
        process.exit(1);
    });
