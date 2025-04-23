# Sử dụng python:3.9 làm base image
FROM python:3.9

# Thiết lập thư mục làm việc trong container
WORKDIR /app

# Sao chép file requirements.txt vào container
COPY requirements.txt /app

# Cài đặt Flask và các dependencies khác
RUN pip install --no-cache-dir -r requirements.txt

# Sao chép mã nguồn vào container
COPY . /app

# Mở cổng 5000
EXPOSE 5000

# Chạy ứng dụng Flask
CMD ["python", "app.py"]
