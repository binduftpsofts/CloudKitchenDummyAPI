const express = require('express');
const router = express.Router();

// Mock Auth API responses
const authApi = require('../schema/auth_api.js');

// POST /api/v1/auth/send-otp
router.post('/send-otp', (req, res) => {
  const { phone } = req.body;
  if (!phone) {
    return res.status(400).json({ success: false, message: "Phone number is required" });
  }
  
  // Return mock response
  res.status(200).json(authApi.sendOtp.response);
});

// POST /api/v1/auth/verify-otp
router.post('/verify-otp', (req, res) => {
  const { phone, otp } = req.body;
  if (!phone || !otp) {
    return res.status(400).json({ success: false, message: "Phone and OTP are required" });
  }
  
  // Return mock response
  res.status(200).json(authApi.verifyOtp.response);
});

// POST /api/v1/auth/resend-otp
router.post('/resend-otp', (req, res) => {
  const { phone } = req.body;
  if (!phone) {
    return res.status(400).json({ success: false, message: "Phone number is required" });
  }
  
  // Return mock response
  res.status(200).json(authApi.resendOtp.response);
});

module.exports = router;
