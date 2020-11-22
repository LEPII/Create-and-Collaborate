const router = require('express').Router(),
  { uploadImage, uploadVideo } = require('../../controllers/gallery');

router.post('/images', uploadImage);
router.post('/videos', uploadVideo);

module.exports = router;
