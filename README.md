# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Description and goals

This is an educational project.

I practiced function and object based React components to:

1. get user's input in the search bar
2. fetch pics from unsplash api
3. render these pics on the page and tile them, not just list.

If you would like to download and deploy this code, you would need to create a folder 'api' inside of 'src' folder to provide the following code to make axios request to unsplash api:

import axios from "axios";

export default axios.create({
baseURL: "https://api.unsplash.com",
headers: {
Authorization: "Client-ID your client id from unsplash api",
},
});

Please don't forget to register with unsplash api to get your client-id.
