const Image = require('../db/models/Image'),
  Video = require('../db/models/Video'),
  mongoose = require('mongoose'),
  cloudinary = require('cloudinary').v2;

//Upload an image
exports.uploadImage = async (req, res) => {
  try {
    const response = await cloudinary.uploader.upload(
      req.files.image.tempFilePath
    );
    const image = new Image({
      hostedBy: req.user._id,
      image: response.secure_url
    });
    await image.save();
    res.json(image);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//save video
exports.uploadVideo = async (req, res) => {
  try {
    const response = await cloudinary.uploader.upload(
      req.files.video.tempFilePath
    );
    const video = new Video({
      hostedBy: req.user._id,
      image: response.secure_url
    });
    await video.save();
    res.json(video);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//Create a post
exports.createPost = async (req, res) => {
  try {
    const post = await new Image({
      ...req.body,
      hostedBy: req.user._id
    });
    await post.save();
    res.status(200).send(post);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//Get all jobs
exports.getAllPosts = async (req, res) => {
  try {
    const users = await Image.find();
    res.json(users);
    res.status(200).json(req.user.posts);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
