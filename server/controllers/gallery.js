const Image = require('../db/models/image'),
  Video = require('../db/models/video'),
  mongoose = require('mongoose'),
  cloudinary = require('cloudinary').v2;

//Upload an image
exports.uploadImage = async (req, res) => {
  try {
    const response = await cloudinary.uploader.upload(
      req.files.image.tempFilePath
    );
    const image = new Image({
      hostedBy: req.images._id,
      image: response.secure_url
    });
    await image.save();
    res.json(image);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//Create a post
exports.createImage = async (req, res) => {
  try {
    const post = await new Image({
      ...req.body,
      hostedBy: req.images._id
    });
    await post.save();
    res.status(200).send(post);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//Get all jobs
exports.getAllImages = async (req, res) => {
  try {
    const posts = await Image.find().populate('images');

    const parsedImages = posts.map((post) => ({
      images: post.images,
      images: post
    }));
    res.status(200).json(parsedImages);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getimagesImages = async (req, res) => {
  const _id = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(400).json({ message: 'Images not found :-(' });
  try {
    const image = await Image.find({ hostedBy: _id });
    if (!image)
      return res.status(400).json({ message: 'Images not found :-(' });
    res.status(200).json(image);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//save video
exports.uploadVideo = async (req, res) => {
  try {
    const response = await cloudinary.uploader.upload(
      req.files.video.tempFilePath,
      {
        resource_type: 'video'
      }
    );
    const video = new Video({
      hostedBy: req.images._id,
      video: response.secure_url
    });
    await video.save();
    res.json(video);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.createVideo = async (req, res) => {
  try {
    const post = await new Video({
      ...req.body,
      hostedBy: req.images._id
    });
    await post.save();
    res.status(200).send(post);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAllVideos = async (req, res) => {
  try {
    const posts = await Video.find();
    res.json(posts);
    res.status(200).json(req.images.posts);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getimagesVideos = async (req, res) => {
  const _id = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(400).json({ message: 'Videos not found :-(' });
  try {
    const video = await Video.find({ hostedBy: _id });
    if (!video)
      return res.status(400).json({ message: 'Videos not found :-(' });
    res.status(200).json(video);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.likedPost = async (req, res) => {
  try {
    const postToLike = await Image.findOne({ _id: req.params.id });
    //If my id is already included in the likedBy array, remove it by filter (thus unlikes)
    if (postToLike.likedBy.includes(req.user._id)) {
      postToLike.likedBy = postToLike.likedBy.filter((id) => {
        return id.toString() !== req.images._id.toString();
      });
      await postToLike.save();
      // Filter OUT the postToLike's id from the people i am "likes"
      req.images.likes = req.images.likes.filter((id) => {
        return id.toString() !== postToLike._id.toString();
      });
      await req.images.save();
      return res.status(400).json({
        message: 'likes not found :-('
      });
    }
    postToLike.likedBy.push(req.images._id);
    await postToLike.save();
    req.images.likes.push(postToLike._id);
    await req.images.save();
    res.status(200).json({ postToLike });
  } catch (e) {
    res.status(400).json({ message: 'likes not found :-(' });
  }
};
