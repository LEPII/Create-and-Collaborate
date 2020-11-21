const router = require('express').Router(),
  {
    createPortfolio,
    deletePortfolio,
    updatePortfolio,
    getAllPortfolio,
    getPortfolioById,
    getCurrentPortfolio
  } = require('../../controllers/portfolio');

router.post('/', createPortfolio);
router.get('/', getAllPortfolio);
router.put('/:id', updatePortfolio);
router.delete('/:id', deletePortfolio);
router.get('/:id', getPortfolioById);
router.get('/:id', getCurrentPortfolio);

module.exports = router;
