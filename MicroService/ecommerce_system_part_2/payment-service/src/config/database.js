const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("paymentdb", "postgres", "root", {
  host: "localhost",
  dialect: "postgres",
});

module.exports = sequelize;
