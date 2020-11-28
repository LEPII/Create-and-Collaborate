const router = require('express').Router(),
  {
    uploadImage,
    uploadVideo,
    getAllVideos,
    getAllImages,
    getUserImages,
    getUserVideos,
    createImage
  } = require('../../controllers/gallery');

router.post('/images', uploadImage);
router.post('/post', createImage);
router.get('/images', getAllImages);
router.get('/images/:id', getUserImages);
router.post('/videos', uploadVideo);
router.get('/videos', getAllVideos);
router.get('/videos/:id', getUserVideos);

module.exports = router;
