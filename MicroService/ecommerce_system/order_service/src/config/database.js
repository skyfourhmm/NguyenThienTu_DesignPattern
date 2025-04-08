const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("orderdb", "postgres", "root", {
  host: "localhost",
  dialect: "postgres",
});

module.exports = sequelize;
