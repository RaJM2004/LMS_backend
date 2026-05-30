import express from 'express';
import { Module } from '../models/Module';
import { ModuleUpdate } from '../models/ModuleUpdate';
import { User } from '../models/User';

const router = express.Router();

// 1. Submit an update (Instructor)
router.post('/submit-update', async (req, res) => {
    try {
        const { moduleId, courseId, title, instructorEmail, order, updates } = req.body;

        // Create a pending update
        const newUpdate = new ModuleUpdate({
            moduleId,
            courseId,
            title,
            instructorEmail,
            order,
            updates,
            status: 'pending'
        });

        await newUpdate.save();
        res.status(201).json({ message: 'Update submitted successfully', update: newUpdate });
    } catch (error) {
        console.error("Error submitting update:", error);
        res.status(500).json({ message: 'Error submitting update' });
    }
});

// 2. Get updates for a specific instructor
router.get('/my-updates', async (req, res) => {
    try {
        const { email } = req.query;
        if (!email) return res.status(400).json({ message: 'Email is required' });

        const updates = await ModuleUpdate.find({ instructorEmail: email }).sort({ submittedAt: -1 });
        res.json(updates);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching updates' });
    }
});

// 3. Get all pending updates (Admin)
router.get('/pending-updates', async (req, res) => {
    try {
        const updates = await ModuleUpdate.find({ status: 'pending' }).sort({ submittedAt: 1 });
        res.json(updates);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching pending updates' });
    }
});

// 4. Approve an update (Admin)
router.post('/approve-update/:id', async (req, res) => {
    try {
        const updateId = req.params.id;
        const update = await ModuleUpdate.findById(updateId);

        if (!update) {
            return res.status(404).json({ message: 'Update not found' });
        }

        if (update.status !== 'pending') {
            return res.status(400).json({ message: 'Update is not pending' });
        }

        // Apply changes to the actual Module
        // We use findOneAndUpdate with upsert: true in case it's a new module (though usually it's an update)
        // Note: 'updates' field in ModuleUpdate contains the fields to update in Module

        // Construct the update object for the Module
        const updateFields: any = {
            id: update.moduleId,
            title: update.title,
            courseId: update.courseId,
            order: update.order,
            sections: update.updates?.sections,
            sessions: update.updates?.sessions,
            code: update.updates?.code,
            output: update.updates?.output,
            mcqs: update.updates?.mcqs
        };

        // Remove undefined fields to avoid overwriting with null
        Object.keys(updateFields).forEach(key => updateFields[key] === undefined && delete updateFields[key]);

        await Module.findOneAndUpdate(
            { id: update.moduleId },
            { $set: updateFields },
            { new: true, upsert: true }
        );

        // Mark update as approved
        update.status = 'approved';
        await update.save();

        res.json({ message: 'Update approved and applied successfully' });
    } catch (error) {
        console.error("Error approving update:", error);
        res.status(500).json({ message: 'Error approving update' });
    }
});

// 5. Reject an update (Admin)
router.post('/reject-update/:id', async (req, res) => {
    try {
        const { reason } = req.body;
        const update = await ModuleUpdate.findByIdAndUpdate(
            req.params.id,
            { status: 'rejected', adminComment: reason },
            { new: true }
        );

        if (!update) {
            return res.status(404).json({ message: 'Update not found' });
        }

        res.json({ message: 'Update rejected', update });
    } catch (error) {
        res.status(500).json({ message: 'Error rejecting update' });
    }
});

// 6. Add Student (Instructor)
router.post('/add-student', async (req, res) => {
    try {
        const { name, email, courseId, instructorEmail } = req.body;

        // Check if user exists
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: 'User with this email already exists' });
        }

        user = new User({
            email,
            fullName: name,
            enrolledCourses: courseId ? [courseId] : [],
            referredBy: instructorEmail,
            role: 'user',
            isPaid: true // Instructor added students might be paid? Let's assume paid or allow access. 
            // User requested: "Instructor can add users...". Usually implies granting access.
            // I'll set isPaid: true to be helpful, or maybe false?
            // "add the users... referral... admin can easily get" -> This sounds like lead gen?
            // "who has added the user... admin can get". 
            // I'll set isPaid: false so they still need to pay, OR true if this is manual enrollment.
            // I'll set isPaid: true for now as "manual add" usually means "grant access".
        });

        await user.save();
        res.status(201).json({ message: 'Student added successfully', user });
    } catch (error) {
        console.error("Error adding student:", error);
        res.status(500).json({ message: 'Error adding student' });
    }
});

// 7. Get My Students (Instructor)
router.get('/my-students', async (req, res) => {
    try {
        const { email } = req.query;
        if (!email) return res.status(400).json({ message: 'Email is required' });

        const students = await User.find({ referredBy: email });
        res.json(students);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching students' });
    }
});

export default router;
