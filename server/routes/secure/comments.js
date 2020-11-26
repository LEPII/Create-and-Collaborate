const router = require('express').Router({ mergeParams: true });
const { createComment, getAllComments } = require('../../controllers/comments');

router.post('/comment', createComment);
router.get('/', getAllComments);

module.exports = router;
