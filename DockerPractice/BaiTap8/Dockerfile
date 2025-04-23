FROM postgres:15

# Thiết lập biến môi trường
ENV POSTGRES_USER=myuser
ENV POSTGRES_PASSWORD=mypassword
ENV POSTGRES_DB=mydatabase

# Tạo thư mục để chứa script SQL
RUN mkdir -p /docker-entrypoint-initdb.d

# Copy file SQL vào thư mục này
COPY init-db.sql /docker-entrypoint-initdb.d/

# Mở cổng PostgreSQL
EXPOSE 5432
