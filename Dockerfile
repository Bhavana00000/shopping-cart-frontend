# Use an official nginx image as base
FROM nginx:alpine

# Copy all project files to nginx html folder
COPY . /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start nginx server
CMD ["nginx", "-g", "daemon off;"]

