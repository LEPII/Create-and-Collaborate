const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema(
  {
    body: { type: String, required: true },
    hostedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    Image: { type: Schema.Types.ObjectId, ref: 'Image' },
    responseTo: { type: Schema.Types.ObjectId, ref: 'User' }
  },
  {
    timestamps: true
  }
);

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
