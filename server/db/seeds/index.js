if (process.env.NODE_ENV !== 'production') require('dotenv').config();
//Import the DB connection
require('../config/index');
const Job = require('../models/job'),
  User = require('../models/user'),
  Event = require('../models/event'),
  Image = require('../models/image'),
  Video = require('../models/video'),
  Portfolio = require('../models/portfolio'),
  faker = require('faker'),
  mongoose = require('mongoose');
// add Gallery function with faker
const dbReset = async () => {
  const collections = Object.keys(mongoose.connection.collections);
  // Loop through each collection and delete all the documents.
  for (const collectionName of collections) {
    const collection = mongoose.connection.collections[collectionName];
    await collection.deleteMany();
  }
  //Count number of users,jobs, and events documents ===> should be 0
  await User.countDocuments({}, function (err, count) {
    console.log('Number of Users: ', count);
  });
  await Event.countDocuments({}, function (err, count) {
    console.log('Number of Events: ', count);
  });
  await Job.countDocuments({}, function (err, count) {
    console.log('Number of Jobs: ', count);
  });
  await Portfolio.countDocuments({}, function (err, count) {
    console.log('Number of Portfolios: ', count);
  });
  await Image.countDocuments({}, function (err, count) {
    console.log('Number of Images: ', count);
  });
  await Video.countDocuments({}, function (err, count) {
    console.log('Number of Videos: ', count);
  });
  //Loop 10 times and create 10 new users
  const userIdArray = [];
  for (let i = 0; i < 20; i++) {
    const me = new User({
      name: `${faker.name.firstName()} ${faker.name.lastName()}`,
      username: faker.internet.userName(),
      admin: Boolean(Math.round(Math.random())),
      email: faker.internet.email(),
      password: faker.internet.password(),
      avatar: faker.image.cats(),
      header: faker.image.nightlife(),
      bio: faker.lorem.paragraph(),
      location: faker.address.stateAbbr(),
      category: faker.name.jobTitle(),
      number: faker.phone.phoneNumber(),
      following: userIdArray[Math.floor(Math.random(50) * userIdArray.length)],
      followers: userIdArray[Math.floor(Math.random(50) * userIdArray.length)]
    });
    await me.generateAuthToken();
    userIdArray.push(me._id);
  }
  //Loop 10 times and create 10 new events
  for (let i = 0; i < 20; i++) {
    const event = new Event({
      description: faker.lorem.sentence(),
      endDate: faker.date.future(),
      startDate: faker.date.future(),
      hostedBy: userIdArray[Math.floor(Math.random() * userIdArray.length)],
      location: faker.address.streetAddress(),
      image: faker.image.nightlife(),
      title: faker.lorem.words(),
      eighteen: faker.random.boolean(),
      twentyOne: faker.random.boolean(),
      typeOfEvent: faker.random.words(),
      prices: faker.commerce.price()
    });
    await event.save();
  }
  //Loop 10 times and create 10 new jobs
  //Add the postedBy Method after we merge
  for (let i = 0; i < 20; i++) {
    const job = new Job({
      description: faker.name.jobDescriptor(),
      posted: faker.date.recent(),
      hostedBy: userIdArray[Math.floor(Math.random() * userIdArray.length)],
      company: faker.company.companyName(),
      title: faker.name.jobTitle(),
      location: faker.address.cityPrefix(),
      compensation: faker.commerce.price()
    });
    await job.save();
  }
  //Loop 10 times and create 10 new portfolios
  for (let i = 0; i < 20; i++) {
    const portfolio = new Portfolio({
      company: faker.company.companyName(),
      position: faker.name.jobTitle(),
      description: faker.lorem.paragraph(),
      dateOfEmployment: faker.date.between(),
      typeOfEmployment: faker.name.jobTitle(),
      image: faker.image.business(),
      hostedBy: userIdArray[Math.floor(Math.random() * userIdArray.length)],
      school: faker.lorem.words()
    });
    await portfolio.save();
  }
  //Loop 10 times and create 10 new images
  for (let i = 0; i < 20; i++) {
    const image = new Image({
      image: faker.image.nightlife(),
      caption: faker.lorem.words(),
      hostedBy: userIdArray[Math.floor(Math.random() * userIdArray.length)]
    });
    await image.save();
  }
  //Loop 10 times and create 10 new videos
  for (let i = 0; i < 20; i++) {
    const video = new Video({
      hostedBy: userIdArray[Math.floor(Math.random() * userIdArray.length)],
      caption: faker.lorem.sentence()
    });
    await video.save();
  }
  //Count number of users ===> should be 10
  await User.countDocuments({}, function (err, count) {
    console.log('Number of users: ', count);
  });
  //Count number of events ===> should be 10
  await Event.countDocuments({}, function (err, count) {
    console.log('Number of events: ', count);
  });
  //Count number of jobs ===> should be 10
  await Job.countDocuments({}, function (err, count) {
    console.log('Number of events: ', count);
  });
  //Count number of portfolios ===> should be 10
  await Portfolio.countDocuments({}, function (err, count) {
    console.log('Number of portfolios: ', count);
  });
  //Count number of images ===> should be 10
  await Image.countDocuments({}, function (err, count) {
    console.log('Number of images: ', count);
  });
  //Count number of videos ===> should be 10
  await Video.countDocuments({}, function (err, count) {
    console.log('Number of video: ', count);
  });
};
dbReset();
