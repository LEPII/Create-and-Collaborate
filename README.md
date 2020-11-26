# Create & Collaborate

**\_✨ A site for artists to connect**

<p>
<img src="https://img.shields.io/badge/Frontend-ReactJS-blue?logo=react">
<img src="https://img.shields.io/badge/Backend-NodeJS-green?logo=node.js">
<img src="https://img.shields.io/badge/DataBase-MongoDB-lightgreen?logo=mongoDB">
</p>

## What is it?

Is the the most reliable place for Artists to connect and expand their portfolio!

## Status

Create & Collaborate 1.0

## Why

We decided that artist deserve a proper plataform to show off their skills while connecting with other artist. It's a platform for great art exposure and a place where all artist connect.

## Screenshots

![]()

## Setting Up

### A. Clone and install packages

1. Fork this project from the top right of the screen to create a copy of the code.
2. Download your fork of the project locally on your machine or clone it using

   ```
    git clone git@github.com:wyncode/c39_create_and_collab.git
   ```

3. Navigate to the folder and run `yarn install` for installing all packages & dependencies for the server/backend via yarn.
4. Navigate to the `client` and run `yarn` to install all dependencies & packages required for the frontend via yarn.

### B. Create API secrets for external services

1. This project uses external services and APIs which require a secret/API pass-key for operations. Please ensure you obtain a pass-key from all these sources before running the project locally.
   - [Cloudinary](https://cloudinary.com/users/register/free) : For storing & fetching images.
   - [SendGrid](https://app.sendgrid.com/) : For sending emails to users upon signup.
   - [MongoDB](https://www.mongodb.com/cloud/atlas) : Either a cloud hosted cluster on Mongo Atlas or your local mongo URL.

### C. Create a `.env` file for serving secrets

1. On the root of your project create a new file named `.env` or run
   ```
   cp .env.sample .env
   ```
2. Add the following content to the file

   ```env
    MONGODB_URL=yourmongouri
    SENDGRID_API_KEY=getyourownapikey
    FROM_EMAIL=
    JWT_SECRET=canbeanything
    APP_URL=http://localhost:3000
    CLOUDINARY_URL=getyourownapikey
   ```

### D. Run the project locally

1. Start the express server (via nodemon) for the backend. By default, it starts on port: `8080`

```
`yarn server`: Runs JUST your Express.JS server.
```

2. Navigate to the client to start the webpack dev server. By default, it starts on port: `3000`.

```
`yarn client`: Runs JUST your front-end React app.
```

3. `yarn dev`: Runs BOTH your Express.JS and React developer environment locally at the same time. Any logs coming from Express will be prefaced with `[0]`, any logs from `create-react-app` will be prefaced with `[1]`.

**_Important_**: The front-end has an already configured proxy to port: `3000` to avoid the browser's CORS denial.

## Dependencies

- `axios`
- `express`
- `@devexpress/dx-react-core`
- `@devexpress/dx-react-scheduler`
- `@devexpress/dx-react-scheduler-material-ui`
- `@fullcalendar/daygrid`
- `@fullcalendar/interaction`
- `@material-ui/core`
- `@material-ui/icons`
- `bootstrap`
- `react-bootstrap`
- `react-dom`
- `react-router-dom`
- `react-scripts`
- `sweetalert`

## Runs on Herkoku

https://create-and-collaborate.herokuapp.com/

## Who are we?

We are a group of people who love all kind art and artist. We are a group of developers with a common goal of providing artist with a proper site for their art and network.
