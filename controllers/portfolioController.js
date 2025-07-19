// controllers/portfolioController.js
const portfolioController = {
    getPortfolioPage: (req, res) => {
        res.render('portfolio', { title: 'Portfolio' });
    }
};

module.exports = portfolioController;
