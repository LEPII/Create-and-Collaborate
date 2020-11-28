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
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    likedBy: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
    hostedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
  },
  {
    timestamps: true
  }
);

imageSchema.virtual('user', {
  ref: 'User',
  localField: 'hostedBy',
  foreignField: '_id'
});

imageSchema.methods.toJSON = function () {
  const image = this;
  const imageObject = image.toObject();
  if (imageObject.dateOfImage) {
    imageObject.dateOfImage = moment(fromNow).format('m');
  }
  return imageObject;
};

const Image = mongoose.model('Image', imageSchema);

module.exports = Image;
