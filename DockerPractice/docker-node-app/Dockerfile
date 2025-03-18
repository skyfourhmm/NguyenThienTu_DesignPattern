# Sử dụng Node.js 18 làm base image
FROM node:18

# Đặt thư mục làm việc trong container
WORKDIR /app

# Sao chép toàn bộ file vào container
COPY . .

# Cài đặt dependencies (nếu có)
RUN npm install

# Mở cổng 3000
EXPOSE 3000

# Chạy ứng dụng
CMD ["node", "server.js"]
