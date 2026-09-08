import express from 'express';
import { Course } from '../models/Course';

const router = express.Router();

const defaultCourses = [
    { id: 'curaquantis-course', title: "CuraQuantis Health Clinics — Franchisee Partner Sales & Operations Training Program", level: "Intermediate", rating: "4.9 (421)", duration: "4 weeks", enrolled: "850", price: "₹2,50,000 + GST", originalPrice: "₹5,00,000", discount: "Special Offer", desc: "Prepare franchise partners to deliver a consistent CuraQuantis brand experience and operate healthcare verticals.", image: "/CuraQuantis.jpeg", color: "blue", status: "Active" },
    { id: 'drug-discovery-sprint', title: "Next-Gen Drug Discovery: 5-Day Sprint (Fast-Track Bootcamp)", level: "Beginner", rating: "4.8 (124)", duration: "5 days", enrolled: "350", price: "₹9,900 + GST", desc: "Accelerate your AI foundation in Drug Discovery in just 5 days.", image: "/drug_discovery_sprint.png", color: "cyan", status: "Active" },
    { id: 'drug-discovery-deep-dive', title: "Next-Gen Drug Discovery: 45-Day Deep-Dive (Career Builder Program)", level: "Intermediate", rating: "4.9 (245)", duration: "45 days", enrolled: "800", price: "₹28,000 + GST", desc: "Comprehensive training and hands-on projects for Drug Discovery using AI.", image: "/drug_discovery_deep_dive.png", color: "emerald", status: "Active" },
    { id: 'drug-discovery-masterclass', title: "Next-Gen Drug Discovery: 6-Month Masterclass (Executive AI Program)", level: "Advanced", rating: "5.0 (512)", duration: "6 months", enrolled: "1.5k", price: "₹1,25,000 + GST", desc: "Executive level masterclass in Generative AI for End-to-End Drug Discovery.", image: "/drug_discovery_masterclass.png", color: "purple", status: "Active" },
    { id: 'python-ai-course', title: "Python Programming for AI", level: "Beginner", rating: "4.5 (1,247)", duration: "5 days", enrolled: "2.5k", price: "₹35,000 + GST", originalPrice: "₹1,00,000", discount: "65% OFF", desc: "Master the fundamentals of artificial intelligence with hands-on projects and real-world applications.", image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80", color: "blue", status: "Active" },
    { id: 'ml-dl-course', title: "MACHINE LEARNING & DEEP LEARNING", level: "Advanced", rating: "4.7 (856)", duration: "5 days", enrolled: "2.5k", price: "₹35,000 + GST", originalPrice: "₹1,00,000", discount: "65% OFF", desc: "Take your artificial intelligence skills to the next level with advanced techniques and industry best practices.", image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80", color: "purple", status: "Active" },
    { id: 'neural-networks-course', title: "NEURAL NETWORKS & DEEP LEARNING", level: "Beginner", rating: "4.3 (2,134)", duration: "5 days", enrolled: "2.5k", price: "₹35,000 + GST", originalPrice: "₹1,00,000", discount: "65% OFF", desc: "Start your journey in artificial intelligence with this comprehensive beginner-friendly course.", image: "https://bernardmarr.com/img/Deep%20Learning%20Vs%20Neural%20Networks%20Whats%20The%20Difference.png", color: "red", status: "Active" },
    { id: 'nlp-course', title: "NATURAL LANGUAGE PROCESSING", level: "Intermediate", rating: "4.8 (645)", duration: "5 days", enrolled: "2.5k", price: "₹35,000 + GST", originalPrice: "₹1,00,000", discount: "65% OFF", desc: "Get certified in artificial intelligence with this industry-recognized professional certification course.", image: "https://cis.unimelb.edu.au/__data/assets/image/0009/4492962/NLP.jpg", color: "green", status: "Active" },
    { id: 'cv-course', title: "COMPUTER VISION", level: "All Level", rating: "4.9 (423)", duration: "5 days", enrolled: "2.5k", price: "₹35,000 + GST", originalPrice: "₹1,00,000", discount: "65% OFF", desc: "Join our exclusive masterclass and learn artificial intelligence from industry experts and leaders.", image: "https://d3lkc3n5th01x7.cloudfront.net/wp-content/uploads/2024/04/18095229/computer-vision-banner.png", color: "orange", status: "Active" },
    { id: 'agentic-ai-course', title: "AGENTIC AI", level: "Intermediate", rating: "4.6 (1,089)", duration: "5 days", enrolled: "2.5k", price: "₹35,000 + GST", originalPrice: "₹1,00,000", discount: "65% OFF", desc: "Learn artificial intelligence through real-world projects and build an impressive portfolio.", image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=1632&q=80", color: "pink", status: "Active" },
    { id: 'gen-ai-course', title: "Generative AI", level: "Intermediate", rating: "4.6 (1,089)", duration: "5 days", enrolled: "2.5k", price: "₹35,000 + GST", originalPrice: "₹1,00,000", discount: "65% OFF", desc: "Learn artificial intelligence through real-world projects and build an impressive portfolio.", image: "https://images.unsplash.com/photo-1676299081847-824916de030a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1632&q=80", color: "indigo", status: "Active" },
    { id: 'ai-risk-course', title: "AI Risk Curriculum", level: "Intermediate", rating: "4.6 (1,089)", duration: "5 days", enrolled: "2.5k", price: "₹35,000 + GST", originalPrice: "₹1,00,000", discount: "65% OFF", desc: "Learn advance artificial intelligence through real-world projects and build an impressive portfolio.", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80", color: "red", status: "Active" },
    { id: 'ai-cybersecurity-course', title: "AI in Cybersecurity Course Curriculum", level: "Intermediate", rating: "4.6 (1,089)", duration: "5 days", enrolled: "2.5k", price: "₹35,000 + GST", originalPrice: "₹1,00,000", discount: "65% OFF", desc: "Learn advance artificial intelligence through real-world projects and build an impressive portfolio.", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80", color: "red", status: "Active" },
    { id: 'csv-course', title: "Computerized System Validation (CSV)", level: "Intermediate", rating: "4.6 (1,089)", duration: "5 days", enrolled: "2.5k", price: "₹35,000 + GST", originalPrice: "₹1,00,000", discount: "65% OFF", desc: "Ensure compliance and validation in regulated industries.", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80", color: "blue", status: "Active" },
    { id: 'med-writing-course', title: "Medical Writing, Regulatory Writing & Scientific Writing", level: "Intermediate", rating: "4.6 (1,089)", duration: "5 days", enrolled: "2.5k", price: "₹35,000 + GST", originalPrice: "₹1,00,000", discount: "65% OFF", desc: "Professional scientific writing for healthcare and pharma.", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80", color: "green", status: "Active" },
    { id: 'ai-healthcare-course', title: "Artificial Intelligence in Healthcare", level: "Intermediate", rating: "4.6 (1,089)", duration: "5 days", enrolled: "2.5k", price: "₹35,000 + GST", originalPrice: "₹1,00,000", discount: "65% OFF", desc: "Transform patient care with Artificial Intelligence.", image: "https://aihms.in/blog/wp-content/uploads/2020/05/ai1.jpg", color: "teal", status: "Active" },
    { id: 'lifesciences-ai-course', title: "Transforming Lifesciences with AI", level: "Intermediate", rating: "4.6 (1,089)", duration: "5 days", enrolled: "2.5k", price: "₹35,000 + GST", originalPrice: "₹1,00,000", discount: "65% OFF", desc: "Accelerate discovery and delivery in life sciences.", image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80", color: "purple", status: "Active" },
    { id: 'ai-medical-coding-course', title: "AI in Medical Coding", level: "Intermediate", rating: "4.6 (1,089)", duration: "5 days", enrolled: "2.5k", price: "₹35,000 + GST", originalPrice: "₹1,00,000", discount: "65% OFF", desc: "Automate and optimize medical coding processes.", image: "https://cdn.prod.website-files.com/61d48f722324914c384ef59a/66e1e03566afe79172867bbc_16_%20The%20Role%20of%20AI%20in%20Modern%20Medical%20Coding%20and%20Notes%20Review.jpg", color: "blue", status: "Active" },
    { id: 'pharma-gen-ai-course', title: "Generative AI, Agentic AI, and Ethical AI in Pharma", level: "Intermediate", rating: "4.6 (1,089)", duration: "5 days", enrolled: "2.5k", price: "₹35,000 + GST", originalPrice: "₹1,00,000", discount: "65% OFF", desc: "Revolutionize drug discovery and pharma operations.", image: "https://www.nagarro.com/hubfs/Agentic%20AI%20in%20healthcare%20mobile-1.png", color: "indigo", status: "Active" },
    { id: 'data-engg', title: "Data Engineering", level: "Intermediate", rating: "4.8 (912)", duration: "5 days", enrolled: "1.8k", price: "₹35,000 + GST", originalPrice: "₹1,00,000", discount: "65% OFF", desc: "Build robust data pipelines and architecture for modern AI applications.", image: "/data-engg.png", color: "blue", status: "Active" },
    { id: 'data-scientist', title: "Data Scientist", level: "Advanced", rating: "4.9 (1,056)", duration: "5 days", enrolled: "2.1k", price: "₹35,000 + GST", originalPrice: "₹1,00,000", discount: "65% OFF", desc: "Master statistical analysis, machine learning and data visualization.", image: "/data-scientist.png", color: "purple", status: "Active" },
    { id: 'robotics-ai', title: "Advanced Robotics & AI Integration", level: "Advanced", rating: "5.0 (743)", duration: "1 day", enrolled: "1.2k", price: "₹35,000 + GST", originalPrice: "₹1,00,000", discount: "65% OFF", desc: "Master the intersection of artificial intelligence and modern robotics.", image: "/robotics_ai.png", color: "teal", status: "Active" },
    { id: 'cqv-course', title: "Commissioning Qualification and Validation (CQV) Consulting", level: "Intermediate", rating: "4.8 (312)", duration: "8 weeks", enrolled: "650", price: "₹35,000 + GST", originalPrice: "₹1,00,000", discount: "65% OFF", desc: "Master commissioning, qualification, and validation for regulated industries including pharma, biotech, and medical devices.", image: "/cqv_course.png", color: "green", status: "Active" }
];

// Get all courses
router.get('/', async (req, res) => {
    try {
        let courses = await Course.find();
        
        if (courses.length === 0) {
            await Course.insertMany(defaultCourses);
            courses = await Course.find();
        }
        
        res.json(courses);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch courses' });
    }
});

// Create a new course
router.post('/', async (req, res) => {
    try {
        const course = new Course(req.body);
        await course.save();
        res.status(201).json(course);
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
});

// Update an existing course
router.put('/:id', async (req, res) => {
    try {
        const course = await Course.findOneAndUpdate(
            { id: req.params.id },
            req.body,
            { new: true }
        );
        if (!course) {
            return res.status(404).json({ error: 'Course not found' });
        }
        res.json(course);
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
});

// Delete a course
router.delete('/:id', async (req, res) => {
    try {
        const course = await Course.findOneAndDelete({ id: req.params.id });
        if (!course) {
            return res.status(404).json({ error: 'Course not found' });
        }
        res.json({ message: 'Course deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete course' });
    }
});

export default router;
