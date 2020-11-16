const Jobs = require('../db/models/job');

//Create job
exports.createJob = async (req, res) => {
  try {
    const job = await new Job({
      ...req.body,
      owner: req.user._id
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
    const job = await Job.findOne({ _id, owner: req.user._id });
    if (!job) return res.status(400).json({ message: 'Job not found :-(' });
    res.status(200).json(job);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
