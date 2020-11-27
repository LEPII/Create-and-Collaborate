require('./db/config');
const express = require('express'),
  cookieParser = require('cookie-parser'),
  bodyParser = require('body-parser'),
  pino = require('express-pino-logger')(),
  path = require('path'),
  openRoutes = require('./routes/open'),
  userRouter = require('./routes/secure/users'),
  portfolioRouter = require('./routes/secure/portfolio'),
  eventRouter = require('./routes/secure/events'),
  jobRoutes = require('./routes/secure/jobs'),
  likeRoutes = require('./routes/secure/likes'),
  galleryRoutes = require('./routes/secure/gallery'),
  messageRoutes = require('./routes/secure/messages');
(fileUpload = require('express-fileupload')),
  (passport = require('./middleware/authentication/index')),
  (client = require('twilio')(
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_AUTH_TOKEN
  ));

const app = express();

//Middleware
app.use(express.json());
app.use(cookieParser());

// Unauthenticated routes
app.use('/auth', openRoutes);

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
app.use('/portfolios', portfolioRouter);
app.use('/events', eventRouter);
app.use('/jobs', jobRoutes);
app.use('/gallery', galleryRoutes);
app.use('/likes', likeRoutes);
app.use('/message', messageRoutes);


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(pino);

app.get('/api/greeting', (req, res) => {
  const name = req.query.name || 'World';
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
});

app.post('/api/messages', (req, res) => {
  res.header('Content-Type', 'application/json');
  client.messages
    .create({
      from: process.env.TWILIO_PHONE_NUMBER,
      to: req.body.to,
      body: req.body.body
    })
    .then(() => {
      res.send(JSON.stringify({ success: true }));
    })
    .catch((err) => {
      console.log(err);
      res.send(JSON.stringify({ success: false }));
    });
});

// Handle React routing, return all requests to React app
if (process.env.NODE_ENV === 'production') {
  app.get('*', (request, response) => {
    response.sendFile(path.join(__dirname, '../client/build', 'index.html'));
  });
}
module.exports = app;
