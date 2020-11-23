const router = require('express').Router(),
  {
    uploadImage,
    uploadVideo,
    createPost,
    getAllPosts
  } = require('../../controllers/gallery');

router.post('/images', uploadImage);
router.post('/videos', uploadVideo);
router.post('/posts', createPost);
router.get('/allposts', getAllPosts);

module.exports = router;
