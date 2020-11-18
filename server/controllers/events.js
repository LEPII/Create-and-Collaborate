const Event = require('../db/models/event');
mongoose = require('mongoose');

//Creates job
exports.createEvent = async (req, res) => {
  try {
    const event = await new Event({
      ...req.body,
      owner: req.user._id
    });
    await event.save();
    res.status(200).send(event);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get a specific event
exports.getSpecificEvent = async (req, res) => {
  const _id = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(400).json({ message: 'Event not found :-(' });

  try {
    const event = await Event.findOne({ _id, hostedBy: req.user._id });
    if (!event) return res.status(400).json({ message: 'Event not found :-(' });
    res.status(200).json(event);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all events
exports.getAllEvents = async (req, res) => {
  const match = {};
  const sort = {};

  if (req.query.datePassedCompleted)
    match.datePassedCompleted = req.query.datePassedCompleted === 'true';
  if (req.query.sortBy) {
    const parts = req.query.sortBy.split(':');
    sort[parts[0]] = parts[1] === 'desc' ? -1 : 1;
  }
  try {
    await req.user
      .populate({
        path: 'events',
        match,
        options: {
          limit: parseInt(req.query.limit),
          skip: parseInt(req.query.skip),
          sort
        }
      })
      .execPopulate();
    res.status(200).json(req.user.events);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//update all events
exports.updateEvent = async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = [
    'title',
    'location',
    'dateOfEvent',
    'description',
    'image',
    'prices'
  ];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );
  if (!isValidOperation)
    return res.status(400).json({ message: 'invalid updates' });

  try {
    const event = await Event.findOne({
      _id: req.params.id,
      hostedBy: req.user._id
    });
    if (!event) return res.status(404).json({ message: 'Event not found :-(' });
    updates.forEach((update) => (event[update] = req.body[update]));
    await event.save();
    res.status(200).json(event);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//delete all events
exports.deleteEvent = async (req, res) => {
  try {
    const event = await Event.findOneAndDelete({
      _id: req.params.id,
      hostedBy: req.user._id
    });
    if (!event) return res.status(404).json({ message: 'Event not found :-(' });
    res.status(200).json({ message: 'Event has been deleted!' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
