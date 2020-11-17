require('./db/config');
const express = require('express'),
  cookieParser = require('cookie-parser'),
  path = require('path'),
  openRoutes = require('./routes/open'),
  userRouter = require('./routes/secure/users'),
  jobRoutes = require('./routes/secure/jobs');
passport = require('./middleware/authentication/index');

const app = express();

//Middleware
app.use(express.json());
app.use(cookieParser());

// Unauthenticated routes
app.use('/', openRoutes);

// Serve any static files
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

// Any authentication middleware and related routing would be here.
app.use('/*', passport.authenticate('jwt', { session: false }));
app.use('/users', userRouter);
app.use('/jobs', jobRoutes);

// Handle React routing, return all requests to React app
if (process.env.NODE_ENV === 'production') {
  app.get('*', (request, response) => {
    response.sendFile(path.join(__dirname, '../client/build', 'index.html'));
  });
}
module.exports = app;
