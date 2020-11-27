const router = require('express').Router(),
  { createMessage, messageUser } = require('../../controllers/messages');

router.post('/', createMessage);
router.post('/:id', messageUser);

module.exports = router;
