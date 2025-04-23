const express = require("express");
const router = express.Router();
const paymentController = require("../controllers/payment.controller");

router.post("/payments", paymentController.createPayment);
router.get("/payments/:id", paymentController.getPayment);

module.exports = router;
