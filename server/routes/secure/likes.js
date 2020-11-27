const router = require('express').Router(),
  { getLikes, postLike, unLike } = require('../../controllers/like');

router.get('/', getLikes);
router.post('/:id', postLike);
router.post('/:id', unLike);

module.exports = router;
