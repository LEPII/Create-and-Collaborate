const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema(
  {
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
  },
  {
    timestamps: true
  }
);

imageSchema.methods.toJSON = function () {
  const image = this;
  const imageObject = image.toObject();
  if (imageObject.dateOfImage) {
    imageObject.dateOfImage = moment(imageObject.dateOfImage).format('lll');
  }
  return imageObject;
};

const Image = mongoose.model('Image', imageSchema);

module.exports = Image;
