const Job = require('../db/models/job'),
  mongoose = require('mongoose');

//Create job
exports.createJob = async (req, res) => {
  try {
    const job = await new Job({
      ...req.body,
      hostedBy: req.user._id
    });
    await job.save();
    res.status(200).send(job);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//Get a job
exports.getSpecificJob = async (req, res) => {
  const _id = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(400).json({ message: 'Job not found :-(' });
  try {
    const job = await Job.findOne({ _id, hostedBy: req.user._id });
    if (!job) return res.status(400).json({ message: 'Job not found :-(' });
    res.status(200).json(job);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//Update existing job
exports.updateJob = async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = [
    'title',
    'description',
    'compensation',
    'location',
    'company'
  ];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );
  if (!isValidOperation)
    return res.status(400).json({ message: 'invalid updates' });
  try {
    const job = await Job.findOne({
      _id: req.params.id,
      hostedBy: req.user._id
    });
    if (!job) return res.status(404).json({ message: 'job not found' });
    updates.forEach((update) => (job[update] = req.body[update]));
    await job.save();
    res.status(200).json(job);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//Delete existing job
exports.deleteJob = async (req, res) => {
  try {
    const job = await Job.findOneAndDelete({
      _id: req.params.id,
      hostedBy: req.user._id
    });
    if (!job) return res.status(404).json({ message: 'job not found' });
    res.status(200).json({ message: 'job has been deleted' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//Get all jobs
exports.getAllJobs = async (req, res) => {
  const match = {};
  const sort = {};

  if (req.query.completed) match.completed = req.query.completed === 'true';
  if (req.query.sortBy) {
    const parts = req.query.sortBy.split(':');
    sort[parts[0]] = parts[1] === 'desc' ? -1 : 1;
  }
  try {
    await req.user
      .populate({
        path: 'jobs',
        match,
        options: {
          limit: parseInt(req.query.limit),
          skip: parseInt(req.query.skip),
          sort
        }
      })
      .execPopulate();
    res.status(200).json(req.user.jobs);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
