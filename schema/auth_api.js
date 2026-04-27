/**
 * @file auth_api.js
 * @description Authentication API structure for phone-based login
 */

const authApi = {
  // 1. Send OTP
  sendOtp: {
    endpoint: "/api/v1/auth/send-otp",
    method: "POST",
    requestBody: {
      phone: "+8801XXXXXXXXX"
    },
    response: {
      success: true,
      message: "OTP sent successfully",
      data: {
        expiresIn: 300 // seconds
      }
    }
  },

  // 2. Verify OTP
  verifyOtp: {
    endpoint: "/api/v1/auth/verify-otp",
    method: "POST",
    requestBody: {
      phone: "+8801XXXXXXXXX",
      otp: "123456"
    },
    response: {
      success: true,
      data: {
        token: "jwt_session_token_here",
        user: {
          id: "usr_001",
          name: "Sabbir",
          phone: "+8801XXXXXXXXX",
          isNewUser: false
        }
      }
    }
  },

  // 3. Resend OTP
  resendOtp: {
    endpoint: "/api/v1/auth/resend-otp",
    method: "POST",
    requestBody: {
      phone: "+8801XXXXXXXXX"
    },
    response: {
      success: true,
      message: "OTP resent successfully"
    }
  }
};

module.exports = authApi;
