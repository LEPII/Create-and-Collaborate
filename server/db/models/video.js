const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema(
  {
    title: {
      type: String
    },
    video: {
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

videoSchema.methods.toJSON = function () {
  const video = this;
  const videoObject = video.toObject();
  if (videoObject.dateOfVideo) {
    videoObject.dateOfVideo = moment(videoObject.dateOfVideo).format('lll');
  }
  return videoObject;
};
const Video = mongoose.model('Video', videoSchema);

module.exports = Video;
