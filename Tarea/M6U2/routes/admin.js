var express = require('express');
var router = express.Router();
var getServicios = require('../models/servicios')

/* GET users listing. */
router.get('/', async function (req, res, next) {
  var servicios = await getServicios.getServicios();
  console.log(servicios)
  res.render('admin', {
    nombre: req.session.user,
    servicios: servicios
  });
});


router.get('/eliminar/:ID', async (req, res, next) => {
  var ID = req.params.ID;
  await getServicios.delateServicios(ID);
  res.redirect('/admin')
});


router.get('/editar/:ID', async (req, res, next) => {
  var ID = req.params.ID;
  var datos = await getServicios.getServiciosbyID(ID);
  console.log(datos)
  res.render('editar', {
    datos
  });
});

router.post('/editar/:ID', async (req, res, next) => {
  try {
    var obj = {
      ID: req.body.ID,
      Servicio: req.body.Servicio,
      Descripcion: req.body.Descripcion,
      Imagen: req.body.Imagen
    }
    await getServicios.editServiciosbyID(obj, req.body.ID)
    res.redirect('/admin');

  } catch (error) {
    console.log(error);
    throw error;
  };
});

router.get('/agregar', (req, res) => {
  res.render('agregar');
})


router.get('/Salir', (req, res) => {
  req.session.destroy();
  res.redirect('/login');
})

module.exports = router;
