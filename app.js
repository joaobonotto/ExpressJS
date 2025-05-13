// app.js
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const createError = require('http-errors');

// Importar as rotas
const indexRouter = require('./routes/index');
const produtosRouter = require('./routes/produtos');

const app = express();

// Configuração do template engine (HBS)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Usar a rota de produtos
app.use('/produtos', produtosRouter);

// Outras rotas que você já tem
app.use('/', indexRouter);

// Tratamento de erro 404
app.use(function(req, res, next) {
  next(createError(404));
});

// Handler de erro
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
