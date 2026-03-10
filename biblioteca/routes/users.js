var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/admin', function(req, res, next) {
  res.send('<h1>hohoho, um admin não é mesmo?</h1>');
});

module.exports = router;
