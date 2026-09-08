import express from 'express';
import { Coupon } from '../models/Coupon';
import { User } from '../models/User';
import mongoose from 'mongoose';

const router = express.Router();

// ------------------------------------
// Admin Routes (You might want to protect these with admin middleware)
// ------------------------------------

// Get all coupons
router.get('/', async (req, res) => {
    try {
        const coupons = await Coupon.find().populate('generatedBy', 'name email');
        res.json(coupons);
    } catch (error: any) {
        res.status(500).json({ error: 'Failed to fetch coupons', details: error.message });
    }
});

// Create a new coupon
router.post('/', async (req, res) => {
    try {
        const { code, discountType, discountValue, validFrom, validUntil, usageLimit } = req.body;
        
        // Check if coupon already exists
        const existingCoupon = await Coupon.findOne({ code: code.toUpperCase() });
        if (existingCoupon) {
            return res.status(400).json({ error: 'Coupon code already exists' });
        }

        const newCoupon = new Coupon({
            code: code.toUpperCase(),
            discountType,
            discountValue,
            validFrom,
            validUntil,
            usageLimit
        });

        await newCoupon.save();
        res.status(201).json(newCoupon);
    } catch (error: any) {
        res.status(500).json({ error: 'Failed to create coupon', details: error.message });
    }
});

// Toggle coupon active status
router.put('/:id/toggle', async (req, res) => {
    try {
        const coupon = await Coupon.findById(req.params.id);
        if (!coupon) return res.status(404).json({ error: 'Coupon not found' });

        coupon.isActive = !coupon.isActive;
        await coupon.save();
        res.json(coupon);
    } catch (error: any) {
        res.status(500).json({ error: 'Failed to update coupon status', details: error.message });
    }
});

// ------------------------------------
// User/Public Routes
// ------------------------------------

// Generate a referral coupon for a user
router.post('/referral', async (req, res) => {
    try {
        const { userId } = req.body;
        if (!userId) return res.status(400).json({ error: 'User ID required' });

        const user = await User.findById(userId);
        if (!user) return res.status(404).json({ error: 'User not found' });

        // Check if they already have a generated referral coupon
        const existingReferral = await Coupon.findOne({ generatedBy: user._id });
        if (existingReferral) {
            return res.json(existingReferral);
        }

        // Generate code based on first name + random number
        const name = (user as any).fullName || (user as any).name;
        const firstName = name ? name.split(' ')[0].toUpperCase().replace(/[^A-Z]/g, '') : 'REF';
        const randomNum = Math.floor(1000 + Math.random() * 9000);
        const code = `${firstName}${randomNum}`;

        // Create coupon (e.g., flat 500 off, valid for 1 year)
        const validFrom = new Date();
        const validUntil = new Date();
        validUntil.setFullYear(validUntil.getFullYear() + 1);

        const newCoupon = new Coupon({
            code,
            discountType: 'FLAT', // or PERCENTAGE
            discountValue: 500, // adjust this value based on your business logic
            validFrom,
            validUntil,
            generatedBy: user._id,
        });

        await newCoupon.save();
        res.status(201).json(newCoupon);
    } catch (error: any) {
        res.status(500).json({ error: 'Failed to generate referral coupon', details: error.message });
    }
});

// Validate coupon code
router.post('/validate', async (req, res) => {
    try {
        const { code, coursePrice } = req.body;
        if (!code) return res.status(400).json({ error: 'Coupon code is required' });
        
        const coupon = await Coupon.findOne({ code: code.toUpperCase() });
        
        if (!coupon) return res.status(404).json({ error: 'Invalid coupon code' });
        if (!coupon.isActive) return res.status(400).json({ error: 'Coupon is not active' });
        
        const now = new Date();
        if (now < coupon.validFrom || now > coupon.validUntil) {
            return res.status(400).json({ error: 'Coupon is expired or not yet valid' });
        }
        
        if (coupon.usageLimit && coupon.usedCount >= coupon.usageLimit) {
            return res.status(400).json({ error: 'Coupon usage limit reached' });
        }

        let discountAmount = 0;
        if (coupon.discountType === 'FLAT') {
            discountAmount = coupon.discountValue;
        } else if (coupon.discountType === 'PERCENTAGE') {
            discountAmount = (coursePrice * coupon.discountValue) / 100;
        }

        // Cap discount at course price
        discountAmount = Math.min(discountAmount, coursePrice || 0);

        res.json({
            valid: true,
            discountAmount,
            finalPrice: Math.max(0, (coursePrice || 0) - discountAmount),
            couponId: coupon._id
        });
    } catch (error: any) {
        res.status(500).json({ error: 'Failed to validate coupon', details: error.message });
    }
});

export default router;
