var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('railway', { title: 'Search Results railway' });
});

module.exports = router;