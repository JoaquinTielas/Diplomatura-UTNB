var express = require('express');
var router = express.Router();
var getServicios = require('../models/servicios');
var cloudinary = require('cloudinary').v2;
var util = require('util');
var uploader = util.promisify(cloudinary.uploader.upload);
var destroy = util.promisify(cloudinary.uploader.destroy);

var colors = require('colors');


/* GET users listing. */
router.get('/', async function (req, res, next) {
  var servicios = await getServicios.getServicios();

  servicios = servicios.map(servicios => {
    if (servicios.Img_ID) {
      var imagen = cloudinary.image(servicios.Img_ID, {
        width: 100,
        height: 100,
        crop: 'fill'
      })
      return ({ ...servicios, imagen })
    }
    else {
      return ({
        ...servicios,
        imagen: ''
      });
    }
  });

  res.render('admin', {
    nombre: req.session.user,
    servicios
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
    var Img_ID = req.body.Img_Original;
    var borrar = false;
    if (req.body.Img_Borrar === "1") {
      Img_ID = null;
      borrar = true;
    }
    else {
      if (req.files && Object.keys(req.files).length > 0) {
        var imagen = req.files.Img_Nueva;
        Img_ID = (await uploader(imagen.tempFilePath)).public_id;
        borrar = true;
      }
      console.log(req.body.Img_Original);
    }
    if (borrar && req.body.Img_Original) {
      await (destroy(req.body.Img_Original));
    }

    var obj = {
      ID: req.body.ID,
      Servicio: req.body.Servicio,
      Descripcion: req.body.Descripcion,
      Img_ID
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
