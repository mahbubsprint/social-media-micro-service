# Use official Node.js 18.x image as the base
FROM node:18-alpine

# Set working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if exists)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port the service runs on 3002
# Note: Ensure this port matches the one used in your application
EXPOSE 3002

# Command to run the application
CMD ["npm", "start"]