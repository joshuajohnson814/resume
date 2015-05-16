'use strict';

var express = require('express');
var app = express();
var gzippo = require('gzippo');

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(gzippo.staticGzip('' + __dirname + '/dist'));

app.get('/*', function(req, res) {
  res.render('index');
});

app.listen(process.env.PORT || 5000);
