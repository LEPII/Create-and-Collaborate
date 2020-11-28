const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const likeSchema = mongoose.Schema(
  {
    hostedBy: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    comments: {
      type: Schema.Types.ObjectId,
      ref: 'Comment'
    },
    Image: {
      type: Schema.Types.ObjectId,
      ref: 'Image'
    }
  },
  { timestamps: true }
);

const Like = mongoose.model('Like', likeSchema);

module.exports = Like;
