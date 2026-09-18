import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(__dirname, '../.env') });

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/dashboard';

const CourseSchema = new mongoose.Schema({
  id: String,
  title: String,
  image: String,
}, { strict: false });

const Course = mongoose.model('Course', CourseSchema, 'courses');

async function fixCourseImages() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Connected to MongoDB');

    const imageMap: Record<string, string> = {
      'curaquantis-course': 'https://lms-frontend-blue-mu.vercel.app/CuraQuantis.jpeg',
      'drug-discovery-sprint': 'https://lms-frontend-blue-mu.vercel.app/drug_discovery_sprint.png',
      'drug-discovery-deep-dive': 'https://lms-frontend-blue-mu.vercel.app/drug_discovery_deep_dive.png',
      'drug-discovery-masterclass': 'https://lms-frontend-blue-mu.vercel.app/drug_discovery_masterclass.png',
      'data-engg': 'https://lms-frontend-blue-mu.vercel.app/data-engg.png',
      'data-scientist': 'https://lms-frontend-blue-mu.vercel.app/data-scientist.png',
      'robotics-ai': 'https://lms-frontend-blue-mu.vercel.app/robotics_ai.png',
      'cqv-course': 'https://lms-frontend-blue-mu.vercel.app/cqv_course.png',
    };

    for (const [courseId, newUrl] of Object.entries(imageMap)) {
      const res = await Course.updateOne({ id: courseId }, { $set: { image: newUrl } });
      console.log(`Updated ${courseId}: matched ${res.matchedCount}, modified ${res.modifiedCount}`);
    }

    const relativeCourses = await Course.find({ image: /^\// });
    for (const c of relativeCourses) {
      const fullUrl = `https://lms-frontend-blue-mu.vercel.app${c.image}`;
      await Course.updateOne({ _id: c._id }, { $set: { image: fullUrl } });
      console.log(`Updated relative image for ${c.id}: ${fullUrl}`);
    }

    console.log('All course images successfully updated in MongoDB!');
    process.exit(0);
  } catch (err) {
    console.error('Error updating course images:', err);
    process.exit(1);
  }
}

fixCourseImages();
