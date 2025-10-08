# Use Node.js image
FROM node:22

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy rest of the backend code
COPY . .

# Expose the port your app uses
EXPOSE 3000

# Start the server
CMD ["node", "server.js"]

