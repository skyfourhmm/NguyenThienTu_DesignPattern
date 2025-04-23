const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Payment = sequelize.define("Payment", {
  orderId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  amount: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  paymentMethod: {
    type: DataTypes.ENUM("credit_card", "paypal", "cod", "bank_transfer"),
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM("pending", "successful", "failed", "refunded"),
    defaultValue: "pending",
  },
  paidAt: {
    type: DataTypes.DATE,
    allowNull: true,
  },
});

module.exports = Payment;
