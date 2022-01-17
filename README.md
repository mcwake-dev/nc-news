# Getting Started with NC News Front-end

This project is a Reddit-link news site serving as a demonstration of modern React with Hooks, interacting
with the [NC News API](https://mcw-nc-news.herokuapp.com]).

To access a live version of this repo, please go to [NC News Front-end](https://nc-news.vercel.app).

# Development

This front-end application was bootstrapped using the [create-react-app CLI](https://github.com/facebook/create-react-app), and has the following dependencies:

- Node.js version 17.2.0 or above
- NPM version 8.1.4
- Git CLI

To set up the app for local development enter the following commands

```
git clone https://github.com/mcwake-dev/nc-news

cd nc-news

npm i
```

Before starting the app, you will need to create a .env.development file in the project root directory, with the property REACT_APP_BACKEND_URL set to the backend URL you would like to use with the front-end. Please refer to
[.env.sample](https://github.com/mcwake-dev/nc-news/blob/main/.env.sample) for the correct format.

```
npm start
```

Should you wish to host this application yourself, you will also require a `.env.production` file in the project root.
