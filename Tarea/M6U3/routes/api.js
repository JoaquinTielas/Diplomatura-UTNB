var express = require('express');
var router = express.Router();
var getServicios = require('../models/servicios');
var cloudinary = require('cloudinary').v2;

router.get('/', async function (req, res, next) {
    var servicios = await getServicios.getServicios();
    console.log(servicios)
  
  
    servicios = servicios.map(servicios => {
      if (servicios.Img_ID) {
        var imagen = cloudinary.image(servicios.Img_ID, {
          width: 960,
          height: 200,
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
  

    res.json(servicios);
  });

  module.exports = router;