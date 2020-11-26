const Portfolio = require('../db/models/portfolio'),
  mongoose = require('mongoose');

//Creates Portfolio
exports.createPortfolio = async (req, res) => {
  try {
    const portfolio = await new Portfolio({
      ...req.body,
      hostedBy: req.user._id
    });
    await portfolio.save();
    res.status(200).send(portfolio);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//update all Portfolio
exports.updatePortfolio = async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = [
    'company',
    'position',
    'typeOfEmployment',
    'dateOfEmployment',
    'location',
    'description',
    'school',
    'schoolDegree',
    'schoolDate',
    'image',
    'video'
  ];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );
  if (!isValidOperation) {
    return res.status(400).json({ message: 'invalid updates' });
  }
  try {
    const portfolio = await Portfolio.findOne({
      hostedBy: req.params.id
    });
    if (!portfolio) {
      return res.status(404).json({ message: 'Portfolio Data not found :-(' });
    }
    updates.forEach((update) => (portfolio[update] = req.body[update]));
    await portfolio.save();
    res.status(200).json(portfolio);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAllPortfolio = async (req, res) => {
  try {
    const portfoliosAndUser = await Portfolio.find().populate('user');

    const parsedPortfoliosAndUser = portfoliosAndUser.map((portfolios) => ({
      user: portfolios.user,
      portfolio: portfolios
    }));
    res.status(200).json(parsedPortfoliosAndUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//delete Portfolio
exports.deletePortfolio = async (req, res) => {
  try {
    const portfolio = await Portfolio.findOneAndDelete({
      _id: req.params.id,
      hostedBy: req.user._id
    });
    if (!portfolio)
      return res
        .status(404)
        .json({ message: 'Portfolio Information not found :-(' });
    res
      .status(200)
      .json({ message: 'Portfolio Information has been deleted!' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getPortfolioById = async (req, res) => {
  try {
    const portfolio = await Portfolio.find({
      hostedBy: req.params.id
    });
    res.status(200).json(portfolio);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getCurrentPortfolio = async (req, res) => {
  try {
    await req.user.populate('portfolios').execPopulate();
    res.send(req.user.portfolio);
  } catch (e) {
    res.status(500).send(e.toString());
  }
};
