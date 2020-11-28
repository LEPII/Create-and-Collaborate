const router = require('express').Router(),
  { getLikes, postLike, unLike } = require('../../controllers/like');

router.get('/', getLikes);
router.post('/like', postLike);
router.post('/unLike', unLike);

module.exports = router;
