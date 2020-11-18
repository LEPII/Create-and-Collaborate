const mongoose = require('mongoose');

const gallerySchema = new mongoose.Schema({
  images: {
    type: String
  },
  videos: {
    type: String
  },
  textWorks: {
    type: String
  },
  hostedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});

const Gallery = mongoose.model('Gallery', jobSchema);

module.exports = Gallery;
