const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
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
  ],
  hostedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});

const Image = mongoose.model('Image', imageSchema);

module.exports = Image;
