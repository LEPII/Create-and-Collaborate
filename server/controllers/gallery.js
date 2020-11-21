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
