const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: true
    },
    hostedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  },
  {
    timestamps: true
  }
);

messageSchema.virtual('user', {
  ref: 'User',
  localField: 'hostedBy',
  foreignField: '_id'
});

messageSchema.methods.toJSON = function () {
  const message = this;
  const messageObject = message.toObject();
  if (messageObject.dateOfMideo) {
    messageObject.dateOfMideo = moment().diff(messageObject.dateOfMessage);
  }
  return messageObject;
};

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;
