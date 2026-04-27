/**
 * @file profile_api.js
 * @description API for User profile and address management
 */

const profileApi = {
  // 1. Get Profile
  getProfile: {
    endpoint: "/api/v1/user/profile",
    method: "GET",
    response: {
      success: true,
      data: {
        id: "usr_001",
        name: "Sabbir",
        phone: "+8801XXXXXXXXX",
        email: "sabbir@example.com",
        avatar: "https://example.com/avatar.jpg",
        addresses: [
          { id: "addr_1", type: "Home", text: "Dhanmondi, Dhaka" },
          { id: "addr_2", type: "Office", text: "Gulshan, Dhaka" }
        ],
        wallet: {
          balance: 2450.50,
          currency: "৳"
        }
      }
    }
  },

  // 2. Update Profile
  updateProfile: {
    endpoint: "/api/v1/user/profile",
    method: "PUT",
    requestBody: {
      name: "Sabbir Ahmed",
      email: "new@example.com"
    },
    response: {
      success: true,
      message: "Profile updated"
    }
  },

  // 3. Wallet Transactions
  getWallet: {
    endpoint: "/api/v1/user/wallet",
    method: "GET",
    response: {
      success: true,
      data: {
        balance: 2450.50,
        transactions: [
          { id: "tr_1", type: "debit", amount: 450, reason: "Order ORD-123", date: "2026-04-22" },
          { id: "tr_2", type: "credit", amount: 1000, reason: "Topup", date: "2026-04-20" }
        ]
      }
    }
  }
};

module.exports = profileApi;
