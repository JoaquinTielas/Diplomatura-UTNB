var express = require('express');
var users = require('../models/users');

var router = express.Router();


router.get('/', function (req, res, next) {
  res.render('login');
});

router.post('/Usuario', async (req, res, next) => {
  try {
    var usuario = req.body.User;
    var password = req.body.Password;

    console.log(usuario)
    console.log(password)

    var data = await users.getUserbyUsernameAndPassword(usuario, password);

    if (data != undefined) {

      req.session.ID = data.ID;     //Variables de session para autenticacion
      req.session.user = data.User;

      res.redirect('/admin');
    }
    else {
      res.render('login', {
        error: true
      });
    }
  }
  catch {
    console.log(error);
  }
});



module.exports = router;