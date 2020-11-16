const router = require('express').Router(),
  { createUser, loginUser } = require('../../controllers/users');

// JUST FOR DEMO PURPOSES, PUT YOUR ACTUAL API CODE HERE
router.post('/', createUser);
router.post('/login', loginUser);
// END DEMO

module.exports = router;
