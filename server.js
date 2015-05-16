'use strict';

var express = require('express');
var app = express();

var port = process.env.PORT || 8080;

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(express.static(__dirname + '/dist'));

app.get('/', function(req, res) {
  res.render('index');
});
