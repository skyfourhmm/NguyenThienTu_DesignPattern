# Stage 1: Build application
FROM node:18 AS builder

WORKDIR /app

# Copy package.json và cài đặt dependencies trước
COPY package*.json ./
RUN npm install --omit=dev  # Chỉ cài dependencies production, bỏ nếu cần devDependencies

# Copy toàn bộ mã nguồn sau khi đã cài đặt dependencies
COPY . .

# Build ứng dụng
RUN npm run build

# Stage 2: Run application
FROM node:18-alpine
WORKDIR /app

# Copy ứng dụng đã build từ stage 1
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json ./

# Chạy lại npm install để đảm bảo module tồn tại trong môi trường chạy
RUN npm install --omit=dev 

EXPOSE 3000
CMD ["node", "dist/index.js"]
