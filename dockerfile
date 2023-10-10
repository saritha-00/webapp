# uses the latest official Nginx Docker image as the base image
FROM nginx:latest

# Copies HTML files from your local machine into
COPY src /usr/share/nginx/html

# Exposes port 80, which is the default port for HTTP traffic
EXPOSE 80

# Start Nginx when the container runs
# starts Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
