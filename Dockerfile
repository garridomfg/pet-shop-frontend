# Use an official Node.js runtime as the base image
FROM node:lts-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json to the working directory
COPY package.json ./

# Install project dependencies
RUN npm install

# Copy all project files to the working directory
COPY . .

EXPOSE 5173

# Define the command to start the application
CMD [ "npm", "run", "dev" ]
