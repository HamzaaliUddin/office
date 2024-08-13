# Use the official Node.js LTS version as a base image
FROM node:20

# Set the working directory in the container
WORKDIR /app

# Update package lists and install necessary dependencies
RUN apt-get update && apt-get install -y curl wget make g++

# Install Node.js and npm
RUN curl -fsSL https://deb.nodesource.com/setup_lts.x | bash -
RUN apt-get install -y nodejs

# Copy package.json and package-lock.json to leverage Docker cache
COPY package*.json ./

# Install project dependencies
RUN npm install --force

# Copy the entire application code to the container
COPY . .

# Build the Next.js app for production
RUN npm run build

# Expose the port that the app will run on
EXPOSE 3000

# Start the Next.js app in production mode
CMD ["npm", "start"]
