const router = require('express').Router(),
  {
    uploadImage,
    uploadVideo,
    getAllVideos,
    getAllImages,
    getUserImages,
    getUserVideos
  } = require('../../controllers/gallery');

router.post('/images', uploadImage);
router.get('/images', getAllImages);
router.get('/images/:id', getUserImages);
router.post('/videos', uploadVideo);
router.get('/videos', getAllVideos);
router.get('/videos/:id', getUserVideos);

module.exports = router;
