import express from 'express';
import { User } from '../models/User';
import { Module } from '../models/Module';

const router = express.Router();

// Middleware to check if user is admin (simplified for now, assumes role is passed or checked in frontend/session)
// In a real app, we'd check the session/token. Here we might trust the client or check a header.
// For this demo, we'll just expose the routes and handle "security" via frontend hiding + maybe a simple header check.

// Get all users
router.get('/users', async (req, res) => {
    try {
        const users = await User.find({});
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching users' });
    }
});

// Create new user
router.post('/users', async (req, res) => {
    try {
        const { email, password, ...rest } = req.body;
        // Check if user exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const newUser = new User({
            email,
            ...rest,
            isPaid: true // Auto-authorize users added by admin
        });
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({ message: 'Error creating user' });
    }
});

// Update user (full update)
router.put('/users/:id', async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(updatedUser);
    } catch (error) {
        console.error("Error updating user:", error);
        res.status(500).json({ message: 'Error updating user' });
    }
});

// Delete user
router.delete('/users/:id', async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);
        if (!deletedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json({ message: 'User deleted successfully' });
    } catch (error) {
        console.error("Error deleting user:", error);
        res.status(500).json({ message: 'Error deleting user' });
    }
});

// Create a new module
router.post('/modules', async (req, res) => {
    try {
        const newModule = new Module(req.body);
        await newModule.save();
        res.status(201).json(newModule);
    } catch (error) {
        console.error("Error creating module:", error);
        res.status(500).json({ message: 'Error creating module', error });
    }
});

// Update a module
router.put('/modules/:id', async (req, res) => {
    try {
        const updatedModule = await Module.findOneAndUpdate(
            { id: req.params.id },
            req.body,
            { new: true, upsert: true } // Create if not exists (for editing static modules)
        );
        res.json(updatedModule);
    } catch (error) {
        console.error("Error updating module:", error);
        res.status(500).json({ message: 'Error updating module', error });
    }
});

// Delete a module
router.delete('/modules/:id', async (req, res) => {
    try {
        await Module.findOneAndDelete({ id: req.params.id });
        res.json({ message: 'Module deleted' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting module' });
    }
});

export default router;
