const Message = require('../db/models/message'),
  User = require('../db/models/user'),
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
    newMessage.participants = [req.params.id, req.user._id];
    const reciever = await User.findById(req.params.id);
    const sender = await User.findById(req.user._id);
    newMessage.to = reciever.name;
    newMessage.from = sender.name;
    await reciever.messages.push(newMessage.username);
    await sender.messages.push(newMessage.username);
    await newMessage.save();
    await reciever.save();
    await sender.save();
    res.json({
      messages: newMessage,
      userTo: reciever,
      userFrom: sender
    });
  } catch (error) {
    console.log(error.message);
  }
};

exports.findUserConversation = async (req, res) => {
  try {
    const messages = await Message.find({
      participants: {
        $all: [
          mongoose.Types.ObjectId(req.params.id),
          mongoose.Types.ObjectId(req.user._id)
        ]
      }
    });
    res.json(messages);
  } catch (error) {
    console.log(error.message);
  }
};

exports.getAllMessages = async (req, res) => {
  try {
    const messages = await Message.find();
    res.json(messages);
    res.status(200).json(req.user.messages);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getUsersMessages = async (req, res) => {
  try {
    const messages = await Message.find();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
