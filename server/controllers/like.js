const Like = require('../db/models/like');

//=================================
//             Likes
//=================================

exports.getLikes = async (req, res) => {
  let variable = {};
  if (req.body.Image) {
    variable = { Image: req.body.Image };
  } else {
    variable = { comments: req.body.comments };
  }
  Like.find(variable).exec((err, likes) => {
    if (err) return res.status(400).send(err);
    res.status(200).json({ success: true, likes });
  });
};

exports.postLike = async (req, res) => {
  let variable = {};
  if (req.body.Image) {
    variable = { Image: req.body.Image, hostedBy: req.body.hostedBy };
  } else {
    variable = { comments: req.body.comments, hostedBy: req.body.hostedBy };
  }

  try {
    const like = await new Like(variable);
    await like.save();
    res.status(200).json({ success: true }).send(like);
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

exports.unLike = async (req, res) => {
  let variable = {};
  if (req.body.Image) {
    variable = { Image: req.body.Image, hostedBy: req.body.hostedBy };
  } else {
    variable = { comments: req.body.comments, hostedBy: req.body.hostedBy };
  }

  try {
    const unLike = await Like.findOneAndDelete(variable);
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(400).json({ success: false, error });
  }
};
