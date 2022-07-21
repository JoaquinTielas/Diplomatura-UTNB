var express = require('express');
var router = express.Router();

/* GET Ruta 3. */
router.get('/Ruta3', function(req, res, next) {
  res.render('Ruta3', { title: 'Ruta3' });
});

module.exports = router;
