var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('PortfolioViews/Home', { title: 'Express' });
});

router.get('/Home', (req, res, next) => {
  res.render('PortfolioViews/Home', { title: 'Yash Shah' });
});

router.get('/AboutMe', (req, res, next) => {
  res.render('PortfolioViews/AboutMe', { title: 'Yash Shah' });
});

router.get('/Projects', (req, res, next) => {
  res.render('PortfolioViews/Projects', { title: 'Yash Shah' });
});

router.get('/ContactMe', (req, res, next) => {
  res.render('PortfolioViews/ContactMe', { title: 'Yash Shah' });
});

module.exports = router;
