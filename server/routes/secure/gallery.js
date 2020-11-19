const router = require('express').Router(),
  { uploadImage } = require('../../controllers/gallery');

router.post('/images', uploadImage);

module.exports = router;
