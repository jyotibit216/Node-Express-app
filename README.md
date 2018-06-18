# Node-Express-app
Single page app to list Hair salons in Amsterdam.

# Getting started

To get the Node server running locally:
- Clone this repo
- `npm install` to install all required dependencies
- Install MongoDB Community Edition ([instructions](https://docs.mongodb.com/manual/installation/#tutorials)) and run it by executing `mongod`
- `npm start` to start the local server

## Application Structure

- `app.js` - The entry point to our application and glues everything together. 
- `src/controllers` - This file all the code logics. 
  - connects client to MongoDB server and fetch the data
  - calculates average rating/reviews
  - prepare and send server data for rendering
- `src/views` - This folder contains provides templates which are rendered.
- `public/` - This folder contains all static files like images, styles and javascript.
- `package.json` – remembers all packages that the app depends on and their versions
