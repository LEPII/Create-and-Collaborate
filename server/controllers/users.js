const User = require('../db/models/user'),
  mongoose = require('mongoose'),
  jwt = require('jsonwebtoken'),
  cloudinary = require('cloudinary').v2,
  {
    sendWelcomeEmail,
    sendCancellationEmail,
    forgotPasswordEmail
  } = require('../emails/index');

//create a user
exports.createUser = async (req, res) => {
  console.log('im running');
  const { name, email, password, username } = req.body;
  try {
    const user = new User({
      name,
      email,
      password,
      username
    });
    await user.save();

    sendWelcomeEmail(email, name);
    const token = await user.generateAuthToken();
    console.log(token);
    res.cookie('jwt', token, {
      httpOnly: true,
      sameSite: 'Strict',
      secure: process.env.NODE_ENV !== 'production' ? false : true
    });
    res.status(201).json(user);
  } catch (e) {
    res.status(500).json({ error: e.message });
    console.log(e);
  }
};

//login to user
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findByCredentials(email, password);
    const token = await user.generateAuthToken();
    res.cookie('jwt', token, {
      httpOnly: true,
      sameSite: 'Strict',
      secure: process.env.NODE_ENV !== 'production' ? false : true
    });
    res.json(user);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

//request password reset
exports.requestPasswordReset = async (req, res) => {
  try {
    const { email } = req.query;

    const user = await User.findOne({ email });
    if (!user) throw new Error('User not found');
    const token = jwt.sign(
      { _id: user._id.toString(), name: user.name },
      process.env.JWT_SECRET,
      { expiresIn: '15m' }
    );
    forgotPasswordEmail(email, token, user.name);
    res.json({ message: 'reset password email sent!' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.passwordRedirect = async (req, res) => {
  const { token } = req.params;
  try {
    jwt.verify(token, process.env.JWT_SECRET, function (err) {
      if (err) throw new Error(err.message);
    });
    res.cookie('jwt', token, {
      httpOnly: true,
      maxAge: 600000,
      sameSite: 'Strict'
    });
    res.redirect(process.env.URL + '/update-password');
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//AUTHENTICATED ROUTES
//Get a user
exports.getCurrentUser = async (req, res) => {
  await req.user.populate({ path: 'jobs', model: 'Job' }).execPopulate();
  await req.user
    .populate({ path: 'portfolios', model: 'Portfolio' })
    .execPopulate();
  await req.user.populate({ path: 'events', model: 'Event' }).execPopulate();
  await req.user.populate({ path: 'images', model: 'Image' }).execPopulate();
  await req.user.populate({ path: 'videos', model: 'Video' }).execPopulate();
  await req.user.populate({ path: 'followers' });
  res.json({
    user: req.user,
    jobs: req.user.jobs,
    portfolios: req.user.portfolios,
    events: req.user.events,
    images: req.user.images,
    videos: req.user.videos
  });
};

// Update a user
exports.updateCurrentUser = async (req, res) => {
  const updates = Object.keys(req.body); // => ['email', 'name', 'password']
  const allowedUpdates = ['name', 'email', 'password', 'avatar', 'header'];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );
  if (!isValidOperation)
    return res.status(400).json({ message: 'Invalid updates' });
  try {
    //Loop through each update, and change the value for the current user to the value coming from the body
    updates.forEach((update) => (req.user[update] = req.body[update]));
    //save the updated user in the db
    await req.user.save();
    //send the updated user as a response
    res.json(req.user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Logout a user
exports.logoutUser = async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter((token) => {
      return token.token !== req.cookies.jwt;
    });
    await req.user.save();
    res.clearCookie('jwt');
    res.json({ message: 'logged out!' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Logout all devices
exports.logoutAllDevices = async (req, res) => {
  try {
    req.user.tokens = [];
    await req.user.save();
    res.clearCookie('jwt');
    res.json({ message: 'logged out from all devices!' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a user
exports.deleteUser = async (req, res) => {
  try {
    await req.user.remove();
    sendCancellationEmail(req.user.email, req.user.name);
    res.clearCookie('jwt');
    res.json({ message: 'user deleted' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Upload avatar
exports.uploadAvatar = async (req, res) => {
  try {
    const response = await cloudinary.uploader.upload(
      req.files.image.tempFilePath
    );
    req.user.avatar = response.secure_url;
    await req.user.save();
    res.json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//Update password
exports.updatePassword = async (req, res) => {
  try {
    req.user.password = req.body.password;
    await req.user.save();
    res.clearCookie('jwt');
    res.status(200).json({ message: 'Password updated successfully!' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//Get all users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
    res.status(200).json(req.user.tasks);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.addFollowing = async (req, res) => {
  try {
    const userToFollow = await User.findOne({ _id: req.params.id });
    userToFollow.followers.push(req.user._id);
    await userToFollow.save();
    req.user.following.push(req.params.id);
    await req.user.save();
    res.status(200).json({
      user: userToFollow,
      message: `You have followed ${userToFollow.username}`
    });
  } catch (error) {
    console.log(error.message);
  }
};

exports.getUserById = async (req, res) => {
  const _id = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(400).json({ message: 'User not found :-(' });
  try {
    const user = await User.findOne({ _id });
    console.log('this is working', { _id });
    if (!user) return res.status(400).json({ message: 'User not found :-(' });
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
