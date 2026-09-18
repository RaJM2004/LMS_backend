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

        let user;
        if (mongoose.Types.ObjectId.isValid(userId)) {
            user = await User.findById(userId);
        }
        if (!user) {
            user = await User.findOne({ email: userId });
        }
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

// Get Refer & Earn Leaderboard
router.get('/leaderboard', async (req, res) => {
    try {
        const topCoupons = await Coupon.find({ generatedBy: { $exists: true, $ne: null } })
            .populate('generatedBy', 'fullName email')
            .sort({ usedCount: -1 })
            .limit(10);

        interface LeaderboardItem {
            rank: number;
            name: string;
            code: string;
            referralsCount: number;
            totalEarned: number;
            badge: string;
            email?: string;
        }

        const realEntries: LeaderboardItem[] = topCoupons.map((coupon, index) => {
            const user: any = coupon.generatedBy || {};
            const rawName = user.fullName || (user.email ? user.email.split('@')[0] : 'Ambassador');
            const nameParts = rawName.split(' ');
            const displayName = nameParts.length > 1 ? `${nameParts[0]} ${nameParts[1][0]}.` : nameParts[0];

            return {
                rank: index + 1,
                name: displayName,
                email: user.email,
                code: coupon.code,
                referralsCount: coupon.usedCount || 0,
                totalEarned: (coupon.usedCount || 0) * 500,
                badge: index === 0 ? '🥇 Gold Leader' : index === 1 ? '🥈 Silver Ambassador' : index === 2 ? '🥉 Bronze Pioneer' : '⭐ Star Promoter'
            };
        });

        // Default inspiring sample referrers if real count is low
        const defaultLeaderboard: LeaderboardItem[] = [
          { rank: 1, name: "Rahul S.", code: "RAHUL99", referralsCount: 18, totalEarned: 9000, badge: "🥇 Gold Leader" },
          { rank: 2, name: "Priya Sharma", code: "PRIYA88", referralsCount: 14, totalEarned: 7000, badge: "🥈 Silver Ambassador" },
          { rank: 3, name: "Aniket K.", code: "ANIKET45", referralsCount: 11, totalEarned: 5500, badge: "🥉 Bronze Pioneer" },
          { rank: 4, name: "Sneha Reddy", code: "SNEHA20", referralsCount: 8, totalEarned: 4000, badge: "⭐ Star Promoter" },
          { rank: 5, name: "Vikram Mehta", code: "VIKRAM12", referralsCount: 6, totalEarned: 3000, badge: "⭐ Star Promoter" },
        ];

        // Merge real entries with fallback if real entries are fewer than 3
        let finalLeaderboard: LeaderboardItem[] = realEntries;
        if (realEntries.length < 3) {
            const existingCodes = new Set(realEntries.map(e => e.code));
            const fillIns = defaultLeaderboard.filter(d => !existingCodes.has(d.code));
            finalLeaderboard = [...realEntries, ...fillIns].slice(0, 10).map((item, idx) => ({
                ...item,
                rank: idx + 1,
                badge: idx === 0 ? '🥇 Gold Leader' : idx === 1 ? '🥈 Silver Ambassador' : idx === 2 ? '🥉 Bronze Pioneer' : '⭐ Star Promoter'
            }));
        }

        res.json(finalLeaderboard);
    } catch (error: any) {
        res.status(500).json({ error: 'Failed to fetch referral leaderboard', details: error.message });
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
