# Use an official Node.js runtime as the base image
FROM node:20

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy the rest of the application code to the working directory
COPY . .

# Install dependencies
RUN npm install

RUN npm audit fix

# Expose the port on which the app runs
EXPOSE 3000