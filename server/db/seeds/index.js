if (process.env.NODE_ENV !== 'production') require('dotenv').config();
//Import the DB connection
require('../config/index');

const Job = require('../models/job'),
  User = require('../models/user'),
  Event = require('../models/event'),
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

  //Loop 10 times and create 10 new users
  const userIdArray = [];
  for (let i = 0; i < 10; i++) {
    const me = new User({
      name: `${faker.name.firstName()} ${faker.name.lastName()}`,
      admin: Boolean(Math.round(Math.random())),
      email: faker.internet.email(),
      password: faker.internet.password()
    });
    await me.generateAuthToken();
    userIdArray.push(me._id);
  }

  //Loop 10 times and create 10 new events
  for (let i = 0; i < 10; i++) {
    const event = new Event({
      description: faker.lorem.paragraph(),
      datePassedCompleted: Boolean(Math.round(Math.random())),
      dateOfEvent: faker.date.future(),
      hostedBy: userIdArray[Math.floor(Math.random() * userIdArray.length)]
    });
    await event.save();
  }

  //Loop 10 times and create 10 new jobs
  //Add the postedBy Method after we merge
  for (let i = 0; i < 10; i++) {
    const job = new Job({
      description: faker.lorem.paragraph(),
      datePassedCompleted: Boolean(Math.round(Math.random())),
      dateOfEvent: faker.date.future(),
      hostedBy: userIdArray[Math.floor(Math.random() * userIdArray.length)],
      company: faker.company.companyName()
    });
    await job.save();
  }

  //Count number of users ===> should be 100
  await User.countDocuments({}, function (err, count) {
    console.log('Number of users: ', count);
  });

  //Count number of tasks ===> should be 100
  await Task.countDocuments({}, function (err, count) {
    console.log('Number of users: ', count);
  });
};

dbReset();
