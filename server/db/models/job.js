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
  }
});

const Job = mongoose.model('Job', jobSchema);

module.exports = Job;
