const express = require("express");
const router = express.Router();
const orderController = require("../controller/order.controller");

router.post("/", orderController.createOrder);
router.get("/", orderController.getAllOrder);
router.get("/:id", orderController.getOrderById);
router.put("/:id", orderController.updateOrder);
router.delete("/:id", orderController.deleteOrder);

module.exports = router;
