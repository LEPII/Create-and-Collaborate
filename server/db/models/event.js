const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  date: {
    type: String,
    required: true
  },
  location: {
    type: String
  },
  prices: {
    type: Number
  },
  image: {
    type: String
  },
  description: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  twentyOne: {
    type: Boolean
  },
  eighteen: {
    type: Boolean
  },
  categories: [
    {
      genre: {
        type: String
      }
    }
  ]
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
