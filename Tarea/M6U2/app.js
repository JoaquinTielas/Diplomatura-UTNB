var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');



require('dotenv').config();

var pool = require('./models/bd');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginRouter = require('./routes/login');
var adminRouter = require('./routes/admin');
var agregarRouter = require('./routes/agregar');

var app = express();

//CONFIGURACIONES
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

//MIDDLEWARES

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  saveUninitialized: false,
  resave: false,
  secret: 'mysecretkey_JT'
}));

seguridad = async (req, res, next) => {     //Autenticacion con variables de session
  try {
    console.log(req.session.ID);
    console.log(req.session.user);
    if (req.session.ID) {
      next();
    }
    else {
      res.redirect('/login');
    }
  }
  catch (error) {
    console.log(error);
  }
}



//ENRUTAMIENTOS

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/login', loginRouter);
app.use('/admin', seguridad, adminRouter);
app.use('/Agregar', agregarRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
