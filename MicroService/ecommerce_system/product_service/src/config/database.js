const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("productdb", "postgres", "root", {
  host: "localhost",
  dialect: "postgres",
});

module.exports = sequelize;
