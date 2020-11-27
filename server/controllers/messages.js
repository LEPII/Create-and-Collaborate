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

exports.messageUser = async (req, res) => {
  try {
    const newMessage = new Message(req.body);
    newMessage.to = req.params.id;
    newMessage.from = req.user._id;
    const reciever = await User.findById(req.params.id);
    const sender = await User.findById(req.user._id);
    const createMessage = await newMessage.save();
    await reciever.messages.push(createMessage._id);
    await sender.messages.push(createMessage._id);
    await reciever.save();
    await sender.save();
    res.json(createMessage);
  } catch (error) {
    console.log(error.message);
  }
};
