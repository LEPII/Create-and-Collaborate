const Gallery = require('../db/models/job'),
  mongoose = require('mongoose'),
  cloudinary = require('cloudinary').v2;

//Upload an image
exports.uploadImage = async (req, res) => {
  try {
    const response = await cloudinary.uploader.upload(
      req.files.image.tempFilePath
    );
    req.gallery.image = response.secure_url;
    await req.gallery.save();
    res.json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
