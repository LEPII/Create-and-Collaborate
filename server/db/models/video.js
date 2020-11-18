const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
  title: {
    type: String
  },
  image: {
    type: String
  },
  caption: {
    type: String
  },
  likes: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
      }
    }
  ]
});

const Video = mongoose.model('Video', videoSchema);

module.exports = Video;
