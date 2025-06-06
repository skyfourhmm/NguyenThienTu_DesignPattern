const express = require("express");
const sequelize = require("./config/database");
const productRoutes = require("./routes/order.routes");

const app = express();
app.use(express.json());
app.use("/products", productRoutes);

sequelize.sync().then(() => {
  console.log("🔁 Database synced!");
  app.listen(3000, () => {
    console.log("🚀 Server running at http://localhost:3000");
  });
});
