const router = require('express').Router(),
  {
    createEvent,
    getSpecificEvent,
    getAllEvents,
    updateEvent,
    deleteEvent
  } = require('../../controllers/events');

router.post('/', createEvent);
router.get('/:id', getSpecificEvent);
router.get('/', getAllEvents);
router.put('/:id', updateEvent);
router.delete('/:id', deleteEvent);

module.exports = router;
