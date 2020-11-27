const router = require('express').Router(),
  {
    createMessage,
    messageUser,
    findUserConversation
  } = require('../../controllers/messages');

router.post('/', createMessage);
router.post('/:id', messageUser);
router.get('/:id', findUserConversation);

module.exports = router;
