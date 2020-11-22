const router = require('express').Router(),
  {
    getCurrentUser,
    updateCurrentUser,
    logoutUser,
    logoutAllDevices,
    deleteUser,
    uploadAvatar,
    updatePassword,
    getAllUsers,
    addFollowing
  } = require('../../controllers/users');

router.get('/me', getCurrentUser);
router.patch('/me', updateCurrentUser);
router.post('/logout', logoutUser);
router.post('/logoutall', logoutAllDevices);
router.delete('/', deleteUser);
router.post('/avatar', uploadAvatar);
router.put('/password', updatePassword);
router.get('/all', getAllUsers);
router.put('/:id', addFollowing);

module.exports = router;
