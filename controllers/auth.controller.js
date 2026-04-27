/**
 * Auth Controller
 * Handles authentication-related operations
 */

const authApi = require('../schema/auth_api');
const { sendSuccess, sendError, sendValidationError } = require('../utils/response.util');

/**
 * Send OTP to phone number
 * POST /api/v1/auth/send-otp
 */
const sendOtp = (req, res) => {
  try {
    const { phone } = req.body;

    // Validation
    if (!phone) {
      return sendValidationError(res, { phone: 'Phone number is required' });
    }

    // Return mock response
    sendSuccess(res, authApi.sendOtp.response.data, authApi.sendOtp.response.message, 200);
  } catch (error) {
    sendError(res, 'Failed to send OTP', 500, error);
  }
};

/**
 * Verify OTP and return token
 * POST /api/v1/auth/verify-otp
 */
const verifyOtp = (req, res) => {
  try {
    const { phone, otp } = req.body;

    // Validation
    if (!phone || !otp) {
      return sendValidationError(res, {
        phone: phone ? undefined : 'Phone number is required',
        otp: otp ? undefined : 'OTP is required',
      });
    }

    // Return mock response
    sendSuccess(res, authApi.verifyOtp.response.data, authApi.verifyOtp.response.message, 200);
  } catch (error) {
    sendError(res, 'Failed to verify OTP', 500, error);
  }
};

/**
 * Resend OTP
 * POST /api/v1/auth/resend-otp
 */
const resendOtp = (req, res) => {
  try {
    const { phone } = req.body;

    // Validation
    if (!phone) {
      return sendValidationError(res, { phone: 'Phone number is required' });
    }

    // Return mock response
    sendSuccess(res, authApi.resendOtp.response.data, authApi.resendOtp.response.message, 200);
  } catch (error) {
    sendError(res, 'Failed to resend OTP', 500, error);
  }
};

module.exports = {
  sendOtp,
  verifyOtp,
  resendOtp,
};
