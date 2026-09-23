import express from 'express';
import { Course } from '../models/Course';

const router = express.Router();

const defaultCourses = [
    {
        id: 'no-code-low-code-ai-agents',
        title: "No Code Low Code AI Agents",
        level: "All Levels (Beginner to Advanced)",
        rating: "4.9 (1,840)",
        duration: "14 Weeks",
        enrolled: "1.8k",
        price: "INR 2,10,000 + GST",
        originalPrice: "INR 4,50,000",
        discount: "Special Offer",
        desc: "Master visual AI builders, autonomous agent frameworks, multi-agent collaboration (CrewAI, AutoGen, LangGraph), and enterprise automation workflows without writing complex code.",
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
        color: "blue",
        status: "Active",
        videoUrl: "https://youtu.be/qWu6nZgjteo",
        brochureUrl: "https://canva.link/rjfd8qkq4hfewxv",
        learnings: [
            "Build your first AI-powered automation using no-code tools (Make, Zapier, n8n)",
            "Master Prompt Engineering frameworks (RTCC, CoT, ReAct) with ChatGPT, Claude, and Gemini",
            "Design and launch functional AI applications with visual builders (Softr, Bubble, FlutterFlow)",
            "Build autonomous single and multi-agent systems (CrewAI, AutoGen, LangGraph)",
            "Implement RAG (Retrieval Augmented Generation) with vector databases (Pinecone, Chroma)",
            "Enterprise AI ethics, governance, compliance (FDA, GDPR), and safety guardrails",
            "Complete End-to-End Capstone Project and earn Certificate of Completion (10 CEUs)"
        ],
        modules: [
            { title: "WEEK 0 — Onboarding & Foundations", topics: ["Program introduction & learning roadmap", "Setup accounts and no-code tools", "Overview of AI landscape", "Community and mentorship onboarding"] },
            { title: "WEEK 1 — AI Fundamentals for Everyone", topics: ["What is AI, GenAI and Agentic AI", "Real-world examples and industry impact", "Key terminology (LLMs, agents, prompts, tokens)", "Capabilities, limitations and ethical AI"] },
            { title: "WEEK 2 — Prompt Engineering Mastery", topics: ["How LLMs understand prompts", "Prompting frameworks and best practices", "Advanced prompting techniques", "Prompt libraries, templates & hands-on practice"] },
            { title: "WEEK 3 — No-Code AI Tools & Platforms", topics: ["Explore leading no-code platforms (Make, Zapier, n8n)", "Build AI workflows without coding", "Integrate LLMs with apps and data", "Automations for real business scenarios"] },
            { title: "WEEK 4 — AI-Powered Productivity", topics: ["Use AI for daily productivity & workflows", "AI in research, documentation and content creation", "Automate repetitive daily tasks", "Hands-on with AI assistants (Copilot, Claude, Gemini)"] },
            { title: "WEEK 5 — Building AI Applications (No-Code)", topics: ["Design AI solutions using visual builders", "Create custom chatbots and assistants", "Work with data (Google Sheets, Notion, Airtable)", "Add logic, integrations and APIs (no-code)"] },
            { title: "WEEK 6 — Introduction to AI Agents", topics: ["What are AI agents and how they work", "Types of agents (simple, multi-agent)", "Agent frameworks (OpenAI Assistants, AutoGen, CrewAI)", "Build your first autonomous AI agent"] },
            { title: "WEEK 7 — Mini Project Week", topics: ["Apply concepts from Weeks 1–6", "Build an end-to-end AI prototype solution", "Work in guided teams or individually", "Mentor feedback and presentation"] },
            { title: "WEEK 8 — Advanced LLM Techniques", topics: ["RAG (Retrieval Augmented Generation) concepts", "Working with embeddings and vector databases", "Fine-tuning vs. Prompting", "Model evaluation and hallucination mitigation"] },
            { title: "WEEK 9 — Multi-Agent Systems", topics: ["Introduction to multi-agent architectures", "Agent collaboration and task planning", "Tools for agent orchestration (LangGraph, CrewAI, AutoGen)", "Memory, tool use and reasoning"] },
            { title: "WEEK 10 — AI for Business and Industry", topics: ["Industry use cases in healthcare, life sciences, finance, marketing", "AI for process automation and decision support", "Case studies & guest sessions from industry experts", "Identify and analyze domain-specific problems"] },
            { title: "WEEK 11 — AI Product Development", topics: ["From idea to working prototype", "Design thinking for AI products", "Building user-friendly interfaces with no-code/low-code", "Testing, evaluation and cloud deployment"] },
            { title: "WEEK 12 — AI Ethics, Governance and Safety", topics: ["Ethical considerations in GenAI", "Bias, fairness and responsible AI", "AI governance and compliance (FDA, GDPR, industry standards)", "Building trustworthy and human-centered AI"] },
            { title: "WEEK 13 — Capstone Project Development", topics: ["Work on your end-to-end capstone project", "Apply multi-agent + RAG + guardrails", "Mentorship from faculty and experts", "Prepare documentation and demo video"] },
            { title: "WEEK 14 — Project Showcase and Career Readiness", topics: ["Present capstone project to faculty & industry experts", "Resume building and LinkedIn optimization", "Interview preparation and career guidance", "Official Certificate of Completion (10 CEUs) & Alumni Network"] }
        ],
        faqs: [
            { q: "Do I need coding experience to take this course?", a: "No! This course is specifically designed for professionals from all backgrounds to build powerful AI systems and autonomous agents using no-code and low-code visual platforms." },
            { q: "How long is the program?", a: "The program spans 14 Weeks (plus Week 0 Onboarding), covering foundational concepts to full enterprise multi-agent capstones." },
            { q: "Where can I view the course brochure?", a: "You can view the full official brochure on Canva at https://canva.link/rjfd8qkq4hfewxv." },
            { q: "Will I receive a verified certificate?", a: "Yes, graduates earn an official Certificate of Completion with 10 CEUs recognized by GenQuantaa Academy." }
        ]
    },
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
        } else {
            // Ensure no-code-low-code-ai-agents exists and is up-to-date with brochure/video/modules
            const noCodeCourse = defaultCourses[0];
            await Course.findOneAndUpdate(
                { id: noCodeCourse.id },
                { $set: noCodeCourse },
                { upsert: true, new: true }
            );
            courses = await Course.find();
        }

        // Clean up any old vercel URLs in DB courses and map to local /filename
        let formattedCourses: any[] = courses.map(c => {
            const obj = c.toObject ? c.toObject() : { ...c };
            if (obj.image && typeof obj.image === 'string' && obj.image.startsWith('https://lms-frontend-blue-mu.vercel.app/')) {
                obj.image = obj.image.replace('https://lms-frontend-blue-mu.vercel.app', '');
            }
            return obj;
        });

        // Always prioritize 'no-code-low-code-ai-agents' as the very first course
        const targetCourse = formattedCourses.find(c => c.id === 'no-code-low-code-ai-agents');
        if (targetCourse) {
            formattedCourses = [targetCourse, ...formattedCourses.filter(c => c.id !== 'no-code-low-code-ai-agents')];
        }
        
        res.json(formattedCourses);
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
