const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  compensation: {
    type: String,
    required: true
  },
  location: {
    type: String
  },
  company: {
    type: String
  },
  posted: {
    type: Date
  },
  hostedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});

jobSchema.virtual('user', {
  ref: 'User',
  localField: 'hostedBy',
  foreignField: '_id'
});

jobSchema.methods.toJSON = function () {
  const job = this;
  const jobObject = job.toObject();
  if (jobObject.posted) {
    jobObject.posted = moment(jobObject.posted).startOf('day').fromNow();
  }
  return jobObject;
};

const Job = mongoose.model('Job', jobSchema);

module.exports = Job;
