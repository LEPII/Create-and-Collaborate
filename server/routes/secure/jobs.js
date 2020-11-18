const router = require('express').Router(),
  {
    createJob,
    updateJob,
    deleteJob,
    getAllJobs,
    getSpecificJob
  } = require('../../controllers/jobs');

router.post('/', createJob);
router.get('/', getAllJobs);
router.put('/:id', updateJob);
router.delete('/:id', deleteJob);
router.get('/:id', getSpecificJob);

module.exports = router;
