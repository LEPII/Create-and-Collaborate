const router = require('express').Router(),
  { createUser } = require('../../controllers/users');

// JUST FOR DEMO PURPOSES, PUT YOUR ACTUAL API CODE HERE
router.post('/', createUser);
// END DEMO

module.exports = router;
