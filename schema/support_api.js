/**
 * @file support_api.js
 * @description API for complaints and support
 */

const supportApi = {
  // POST /api/v1/user/complaints
  endpoint: "/api/v1/user/complaints",
  method: "POST",
  
  requestBody: {
    orderId: "ORD-123 (optional)",
    type: "technical|order|chef|payment",
    message: "The food was late and cold.",
    attachments: ["url_1", "url_2"]
  },
  
  response: {
    success: true,
    message: "Complaint submitted successfully",
    data: {
      ticketId: "TKT-556677"
    }
  }
};

module.exports = supportApi;
