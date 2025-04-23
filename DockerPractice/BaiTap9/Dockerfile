FROM redis:latest

# Copy redis.conf to container
COPY redis.conf /usr/local/etc/redis/redis.conf

# Expose Redis default port
EXPOSE 6379

# Start Redis with custom configuration
CMD ["redis-server", "/usr/local/etc/redis/redis.conf"]
