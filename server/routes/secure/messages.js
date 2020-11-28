const router = require('express').Router(),
  {
    createMessage,
    messageUser,
    findUserConversation,
    getAllMessages,
    getMyMessages
  } = require('../../controllers/messages');

router.post('/', createMessage);
router.get('/', getAllMessages);
router.get('/me', getMyMessages);
router.post('/:id', messageUser);
router.get('/:id', findUserConversation);

module.exports = router;
