FROM node:20-alpine3.20 AS base
# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN yarn install

# Command to start the development server
CMD ["tail", "-f", "/dev/null"]
