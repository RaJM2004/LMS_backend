const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ path: path.join(__dirname, '.env') });

async function verify() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        const db = mongoose.connection.db;

        console.log('=== 1. VERIFYING COURSE IN `courses` COLLECTION ===');
        const robotCourse = await db.collection('courses').findOne({ id: 'robot-ai' });
        if (robotCourse) {
            console.log('Found course:', {
                _id: robotCourse._id,
                id: robotCourse.id,
                title: robotCourse.title,
                modulesCount: robotCourse.modules ? robotCourse.modules.length : 0,
                modules: robotCourse.modules
            });
        } else {
            console.log('COURSE NOT FOUND for id: robot-ai');
        }

        console.log('\n=== 2. VERIFYING MODULE IN `modules` COLLECTION ===');
        const robotModules = await db.collection('modules').find({
            $or: [{ courseId: 'robot-ai' }, { id: 'robot-ai-module-1' }]
        }).toArray();
        console.log(`Found ${robotModules.length} module(s) for robot-ai:`);
        robotModules.forEach(m => {
            console.log({
                _id: m._id,
                id: m.id,
                courseId: m.courseId,
                title: m.title,
                order: m.order,
                sectionsCount: m.sections ? m.sections.length : 0,
                sections: m.sections ? m.sections.map(s => s.title) : [],
                assessmentQuestionsCount: m.moduleAssessment && m.moduleAssessment.mcqs ? m.moduleAssessment.mcqs.length : 0
            });
        });

        console.log('\n=== 3. CHECKING USERS (AMMAR) ===');
        const users = await db.collection('users').find({
            $or: [{ fullName: /ammar/i }, { email: /ammar/i }]
        }).toArray();
        console.log(`Found ${users.length} user(s):`);
        users.forEach(u => {
            console.log({
                email: u.email,
                fullName: u.fullName,
                enrolledCourses: u.enrolledCourses,
                isPaid: u.isPaid
            });
        });

        console.log('\n=== 4. CHECKING RECENT USERS ===');
        const recentUsers = await db.collection('users').find({}).sort({ _id: -1 }).limit(5).toArray();
        recentUsers.forEach(u => {
            console.log({
                email: u.email,
                fullName: u.fullName,
                enrolledCourses: u.enrolledCourses,
                isPaid: u.isPaid
            });
        });

        await mongoose.disconnect();
    } catch (e) {
        console.error('Error:', e);
    }
}

verify();
