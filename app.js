var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var asiakasRouter = require('./routes/asiakas');
var korttiRouter = require('./routes/kortti');
var tapahtumatRouter = require('./routes/tapahtumat');
var tiliRouter = require('./routes/tili');


var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/asiakas', asiakasRouter);
app.use('/kortti', korttiRouter);
app.use('/tapahtumat', tapahtumatRouter);
app.use('/tili', tiliRouter);


module.exports = app;
