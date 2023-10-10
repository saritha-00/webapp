# uses the latest official Nginx Docker image as the base image
FROM nginx:latest

# Copies HTML files from your local machine into
COPY src/portfolio.js /usr/share/nginx/html

# Exposes port 1000, which is the default index page
#EXPOSE 1000

# Exposes port 5000, which is the resume page
EXPOSE 5000

# Start Nginx when the container runs
# starts Nginx in the foreground
ENTRYPOINT ["nginx", "src/portfolio.js"]
