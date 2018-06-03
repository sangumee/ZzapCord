module.exports = function() {

  var express = require('express');
  var app = express();
  var bodyParser = require('body-parser');
  var path = require('path');
  app.locals.pretty = true;
  app.set('views', path.join(__dirname, 'views'));
  app.use(express.static(__dirname + '/public'));
  app.set('view engine', 'pug');
  app.use(bodyParser.urlencoded({
    extended: false
  }));
  return app;
}
