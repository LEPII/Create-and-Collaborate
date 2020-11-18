const router = require('express').Router(),
  { uploadImage } = require('../../controllers/gallery');

router.post('/', uploadImage);

module.exports = router;
