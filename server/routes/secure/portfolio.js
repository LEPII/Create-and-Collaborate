const router = require('express').Router(),
  {
    createPortfolio,
    deletePortfolio,
    updatePortfolio,
    getAllPortfolio
  } = require('../../controllers/portfolio');

router.post('/', createPortfolio);
router.get('/', getAllPortfolio);
router.put('/:id', updatePortfolio);
router.delete('/id', deletePortfolio);

module.exports = router;
