//routes/portfolioRouter.js
const express = require('express');
const router = express.Router();
const portfolioController = require('../controllers/portfolioController');

router.get('/', portfolioController.getPortfolioPage);

module.exports = router;
