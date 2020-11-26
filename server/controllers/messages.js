const Message = require('../db/models/message'),
  User = require('../db/models/user');
mongoose = require('mongoose');

exports.createMessage = async (req, res) => {
  const _id = req.params.id;
  const user = await User.findById(_id);
  try {
    const message = await new Message({
      ...req.body,
      hostedBy: req.user._id
    });
    user.followers.push(req.user._id);
    await message.save();
    res.status(200).send(message);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
