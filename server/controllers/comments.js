const Comment = require('../db/models/comment');
const Image = require('../db/models/image');
// ***********************************************//
// Create a post
// ***********************************************//
exports.createComment = async (req, res) => {
  try {
    const comment = await new Comment({
      hostedBy: req.user._id,
      ...req.body
    });
    await comment.save();
    const post = await Image.findById(req.params._id);
    post.comments.push(comment._id);
    await post.save();
    await post.populate('comments', 'body').execPopulate();
    res.status(200).json(post);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

// ***********************************************//
// Get all comments for a post
// ***********************************************//
exports.getAllComments = async (req, res) => {
  try {
    const comments = Comment.find();
    res.status(200).json(comments);
  } catch (e) {
    res.status(200).json({ error: e.message });
  }
};
