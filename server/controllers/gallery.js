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
      hostedBy: req.user._id,
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
      hostedBy: req.user._id
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
    const posts = await Image.find().populate('user');

    const parsedImages = posts.map((post) => ({
      user: post.user,
      images: post
    }));
    res.status(200).json(parsedImages);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getUserImages = async (req, res) => {
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
      hostedBy: req.user._id,
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
      hostedBy: req.user._id
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
    res.status(200).json(req.user.posts);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getUserVideos = async (req, res) => {
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

TESTED: exports.followUser = async (req, res) => {
  try {
    const userToFollow = await User.findOne({ _id: req.params.id });
    //If my id is already included in the followers array, remove it by filter (thus unfollowing)
    if (userToFollow.followers.includes(req.user._id)) {
      userToFollow.followers = userToFollow.followers.filter((id) => {
        return id.toString() !== req.user._id.toString();
      });
      await userToFollow.save();
      // Filter OUT the userToFollow's id from the people i am "following"
      req.user.following = req.user.following.filter((id) => {
        return id.toString() !== userToFollow._id.toString();
      });
      await req.user.save();
      return res.status(400).json({
        message: `You have unfollowed ${userToFollow.username}`
      });
    }
    userToFollow.followers.push(req.user._id);
    await userToFollow.save();
    req.user.following.push(userToFollow._id);
    await req.user.save();
    res
      .status(200)
      .json({ message: `You are now following ${userToFollow.username}` });
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};
