const mongoose = require('mongoose');
moment = require('moment');

const eventSchema = new mongoose.Schema(
  {
    dateOfEvent: {
      type: Date,
      required: true
    },
    datePassedCompleted: {
      type: Boolean,
      default: false
    },
    location: {
      type: String,
      required: true
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
    hostedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    typeOfEvent: [
      {
        type: String
      }
    ]
  },
  {
    timestamps: true
  }
);

eventSchema.methods.toJSON = function () {
  const event = this;
  const eventObject = event.toObject();
  if (eventObject.dateOfEvent) {
    eventObject.dateOfEvent = moment(eventObject.dateOfEvent).format('LLL');
  }
  return eventObject;
};

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
