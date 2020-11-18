require('./db/config');
const express = require('express'),
  cookieParser = require('cookie-parser'),
  path = require('path'),
  openRoutes = require('./routes/open'),
  userRouter = require('./routes/secure/users'),
  portfolioRouter = require('./routes/secure/portfolio'),
  eventRouter = require('./routes/secure/events'),
  jobRoutes = require('./routes/secure/jobs'),
  galleryRoutes = require('./routes/secure/gallery'),
  fileUpload = require('express-fileupload'),
  passport = require('./middleware/authentication/index');

const app = express();

//Middleware
app.use(express.json());
app.use(cookieParser());

// Unauthenticated routes
app.use('/', openRoutes);

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: '/tmp/images'
  })
);

// Serve any static files
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}


// Any authentication middleware and related routing would be here.
app.use('/*', passport.authenticate('jwt', { session: false }));
app.use('/users', userRouter);
app.use('/portfolio', portfolioRouter);
app.use('/events', eventRouter);
app.use('/jobs', jobRoutes);
app.use('/gallery', galleryRoutes);



// Handle React routing, return all requests to React app
if (process.env.NODE_ENV === 'production') {
  app.get('*', (request, response) => {
    response.sendFile(path.join(__dirname, '../client/build', 'index.html'));
  });
}
module.exports = app;
