const router = require('express').Router(),
  {
    createMessage,
    messageUser,
    findUserConversation,
    getAllMessages
  } = require('../../controllers/messages');

router.post('/', createMessage);
router.get('/', getAllMessages);
router.post('/:id', messageUser);
router.get('/:id', findUserConversation);

module.exports = router;
