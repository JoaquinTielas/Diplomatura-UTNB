var express = require('express');
var router = express.Router();
var getServicios = require('../models/servicios');
var cloudinary = require('cloudinary').v2;
var nodemailer = require('nodemailer');

router.get('/', async function (req, res, next) {
  var servicios = await getServicios.getServicios();
  console.log(servicios)


  servicios = servicios.map(servicios => {
    if (servicios.Img_ID) {
      var imagen = cloudinary.url(servicios.Img_ID, {
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

router.post('/Presupuestos', async (req, res) => {
  const mail = {
    to: 'joaquintielas@gmail.com',
    subject: 'Contacto Web',
    html: `${req.body.nombre} ${req.body.apellido} se contacto para pedir un presupuesto al telefono ${req.body.telefono} y al email ${req.body.email}`
  }

  const transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });

  await transport.sendMail(mail);

  res.status(201).json({
    error: false,
    message: 'Mensaje enviado'
  });
});

module.exports = router;