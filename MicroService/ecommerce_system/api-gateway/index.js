const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const app = express();

// Chuyển tiếp /products đến Product Service
app.use(
  "/products",
  createProxyMiddleware({
    target: "http://localhost:3001",
    changeOrigin: true,
  })
);

// Chuyển tiếp /orders đến Order Service
app.use(
  "/orders",
  createProxyMiddleware({
    target: "http://localhost:3003",
    changeOrigin: true,
  })
);

// Chuyển tiếp /customers đến Customer Service
app.use(
  "/customers",
  createProxyMiddleware({
    target: "http://localhost:3002",
    changeOrigin: true,
  })
);

app.listen(3000, () => {
  console.log("API Gateway đang chạy tại http://localhost:3000");
});
