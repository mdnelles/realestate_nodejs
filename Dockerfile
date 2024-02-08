# Use the official Node.js 18 image as the base image
FROM node:18

WORKDIR /usr/app

# first copy just the package and the lock file, for caching purposes
COPY package.json ./
COPY package-lock.json ./

# install dependencies
RUN npm install

# copy the entire project
COPY . .

# Build the TypeScript code
RUN npm run build

# Expose the port your app will run on
EXPOSE 5050

# Command to run your application
CMD ["node", "dist/server.js"]
