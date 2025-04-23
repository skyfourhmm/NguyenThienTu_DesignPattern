# Dockerfile
FROM python:3.11-slim

# Thiết lập biến môi trường mặc định
ENV APP_ENV=development
ENV PYTHONUNBUFFERED=1

# Sao chép file vào container
WORKDIR /app
COPY app.py /app/

# Chạy ứng dụng
CMD ["python", "app.py"]
