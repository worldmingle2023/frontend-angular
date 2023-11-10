# Step 1: Use a more recent Node.js version that's compatible with Angular 14
FROM node:latest

# Step 2: Set the working directory in the container
WORKDIR /usr/src/app

# Step 3: Copy package.json and package-lock.json (or yarn.lock) to the work directory
COPY package*.json ./

# Step 4: Install project dependencies
RUN npm install -g @angular/cli

RUN npm install --legacy-peer-deps

# Step 5: Copy the rest of your app's source code
COPY . .

# Step 6: Expose the port the app runs on (4200 is the default for Angular apps)
EXPOSE 4200

# Step 7: Define the command to run your app
CMD ["npm", "start"]
