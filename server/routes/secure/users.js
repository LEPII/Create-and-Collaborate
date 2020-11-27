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
    followUser,
    getUserById
  } = require('../../controllers/users');

router.get('/me', getCurrentUser);
router.patch('/me', updateCurrentUser);
router.post('/logout', logoutUser);
router.post('/logoutall', logoutAllDevices);
router.delete('/', deleteUser);
router.post('/avatar', uploadAvatar);
router.put('/password', updatePassword);
router.get('/all', getAllUsers);
router.put('/:id', followUser);
router.get('/:id', getUserById);

module.exports = router;
