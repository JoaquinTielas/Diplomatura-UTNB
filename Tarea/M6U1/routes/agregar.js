var express = require('express');
var router = express.Router();
var getServicios = require('../models/servicios')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('agregar');
});

router.post('/Insertar', async (req, res, next) => {
  try {
    if (req.body.Servicio != "" && req.body.Descripcion != "" && req.body.Imagen != "") {
      await getServicios.insertServicios(req.body);
      res.redirect('/admin');
    } else {
      res.render('agregar', {
        error: true
      })

    }
  }
  catch (error) {
    console.log(error)
    res.send('No se pudo guardar el servicio')
  }
})

module.exports = router;
