var express = require('express');
var router = express.Router();
var getServicios = require('../models/servicios')
var util = require('util');
var cloudinary = require('cloudinary').v2;
var uploader = util.promisify(cloudinary.uploader.upload);

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('agregar');
});

router.post('/Insertar', async (req, res, next) => {
  try {
    var Img_ID = '';
    if (req.files && Object.keys(req.files).length > 0) {
      Imagen = req.files.Imagen;
      Img_ID = (await uploader(Imagen.tempFilePath)).public_id;
    }

    if (req.body.Servicio != "" && req.body.Descripcion != "") {
      await getServicios.insertServicios({
        ...req.body,
        Img_ID
      });
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
