var express = require('express');
const session = require('express-session');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  var conocido = Boolean(req.session.nombre);
  console.log(conocido);
  console.log(req.session.nombre);
  res.render('index',{
    conocido: conocido,
    nombre: req.session.nombre
  });
});

router.post('/Registro', (req, res) => {
  req.session.nombre = req.body;
  console.log(req.session.nombre);
  res.redirect('/');
});

router.get('/Salir', (req, res) =>{
  req.session.destroy();
  res.redirect('/');
})

module.exports = router;
