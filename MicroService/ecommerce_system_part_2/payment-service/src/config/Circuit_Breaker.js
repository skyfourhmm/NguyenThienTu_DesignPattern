const opossum = require("opossum");

const processPayment = async (paymentDetails) => {
  try {
    // Giả sử đây là API bên ngoài để xử lý thanh toán
    const response = await axios.post(
      "https://external-payment-api.com/pay",
      paymentDetails
    );
    return response.data;
  } catch (error) {
    throw new Error("Payment processing failed");
  }
};

// Cấu hình Circuit Breaker
const options = {
  timeout: 3000, // Thời gian chờ yêu cầu, nếu quá thời gian này sẽ tự động lỗi.
  errorThresholdPercentage: 50, // Nếu 50% số lần gọi API thất bại, mở circuit.
  resetTimeout: 3000, // Thời gian để hệ thống thử lại yêu cầu sau khi circuit mở.
};

const circuitBreaker = new opossum(processPayment, options);

circuitBreaker.fallback(() => "Service unavailable. Please try again later.");
