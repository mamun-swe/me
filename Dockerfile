
# Node version
FROM node:16

# Make work directory
WORKDIR /usr/src/app

# Copy files
COPY package*.json ./
COPY . ./

# Install & build
RUN npm install

# PORT defined
EXPOSE 3000

# Execute command
CMD [ "npm", "start"]