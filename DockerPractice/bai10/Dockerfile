FROM php:8.2-apache

# Cài đặt các phần mở rộng cần thiết (nếu có)
RUN docker-php-ext-install mysqli pdo pdo_mysql

# Thiết lập ServerName để tránh cảnh báo
RUN echo "ServerName localhost" >> /etc/apache2/apache2.conf

# Expose cổng 80 để truy cập
EXPOSE 80

# Thiết lập quyền cho thư mục
RUN chown -R www-data:www-data /var/www/html && \
    chmod -R 755 /var/www/html

# Chạy Apache ở chế độ foreground
CMD ["apache2-foreground"]
