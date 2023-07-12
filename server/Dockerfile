# Use the latest LTS (Long Term Support) version of Node.js as the base image
FROM node:lts

# Set the working directory inside the container
WORKDIR /app

# Copy the current server files to the working directory
COPY index.js .
COPY package.json .

# Install dependencies
RUN npm install

# Expose the server port
EXPOSE 3003

# Start the server
CMD ["npm", "start"]