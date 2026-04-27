/**
 * Authentication Routes
 */

const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');

// POST /api/v1/auth/send-otp
router.post('/send-otp', authController.sendOtp);

// POST /api/v1/auth/verify-otp
router.post('/verify-otp', authController.verifyOtp);

// POST /api/v1/auth/resend-otp
router.post('/resend-otp', authController.resendOtp);

module.exports = router;
