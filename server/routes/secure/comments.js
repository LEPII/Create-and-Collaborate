const router = require('express').Router(),
  { createComment, getAllComments } = require('../../controllers/comments');

router.post('/comment', createComment);
router.get('/', getAllComments);

module.exports = router;
