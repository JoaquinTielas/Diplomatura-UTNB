var express = require('express');
var router = express.Router();
var getServicios = require('../models/servicios')

/* GET users listing. */
router.get('/', async function (req, res, next) {

  var servicios = await getServicios.getServicios();

  res.render('admin', {
    nombre: req.session.user,
    servicios: servicios
  });
});

router.get('/agregar', (req, res)=>{
  res.render('agregar');
})


router.get('/Salir', (req, res) => {
  req.session.destroy();
  res.redirect('/login');
})

module.exports = router;
