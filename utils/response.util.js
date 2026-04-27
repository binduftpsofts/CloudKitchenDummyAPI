/**
 * Response Utility
 * Standardized response formatting
 */

const sendSuccess = (res, data, message = 'Success', statusCode = 200) => {
  res.status(statusCode).json({
    success: true,
    message,
    data,
    timestamp: new Date().toISOString(),
  });
};

const sendError = (res, message = 'Error', statusCode = 400, error = null) => {
  res.status(statusCode).json({
    success: false,
    message,
    error: error || null,
    timestamp: new Date().toISOString(),
  });
};

const sendValidationError = (res, errors, message = 'Validation failed') => {
  res.status(422).json({
    success: false,
    message,
    errors,
    timestamp: new Date().toISOString(),
  });
};

module.exports = {
  sendSuccess,
  sendError,
  sendValidationError,
};
