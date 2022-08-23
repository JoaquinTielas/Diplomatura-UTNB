var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('admin',{
    nombre: req.session.user
  });
});

router.get('/Salir', (req, res)=>{
  req.session.destroy();
  res.redirect('/login');
})

module.exports = router;
