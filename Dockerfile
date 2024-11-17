# Use the official Node.js image as the base image
FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Ensure .env is copied if it exists
COPY .env* ./

# Build the NestJS application
RUN npm run build

# Expose the port the app runs on
EXPOSE 3001

# Add a healthcheck
HEALTHCHECK --interval=30s --timeout=30s --start-period=5s --retries=3 \
    CMD node -e "require('http').request({ host: 'localhost', port: 3001, path: '/health', timeout: 2000 }, (res) => { process.exit(res.statusCode === 200 ? 0 : 1); }).on('error', () => { process.exit(1); }).end()"

# Define the command to run the application
CMD ["node", "dist/main"]