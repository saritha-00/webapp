# uses the latest official Nginx Docker image as the base image
FROM nginx:latest

# Copies HTML files from your local machine into
COPY src /usr/share/nginx/html

# Exposes port 1000, which is the default index page
EXPOSE 1000

# Exposes port 2000, which is the resume page
EXPOSE 2000

# Start Nginx when the container runs
# starts Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
