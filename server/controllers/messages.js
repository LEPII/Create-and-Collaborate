const Message = require('../db/models/message'),
  mongoose = require('mongoose');

exports.createMessage = async (req, res) => {
  try {
    const message = await new Message({
      ...req.body,
      hostedBy: req.user._id
    });
    await message.save();
    res.status(200).send(message);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
