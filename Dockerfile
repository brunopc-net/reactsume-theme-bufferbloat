# Use the official Node.js image from Docker Hub
FROM node:18-slim

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project files into the container
COPY . .

# Make the bash script executable
RUN chmod +x publish.sh

# Command to publish the package (will be triggered by the PowerShell script or Docker entrypoint)
CMD ["bash", "publish.sh"]