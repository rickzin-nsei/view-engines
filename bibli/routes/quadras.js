var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('quadras', { title: 'quadras' });
});
router.get('/agendamentos', function(req, res, next) {
  res.render('quadras', { title: 'aqui você faz agendamentos' });
});

module.exports = router;
