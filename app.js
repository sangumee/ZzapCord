var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var path = require('path');
app.locals.pretty = true;
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'pug');
app.use(bodyParser.urlencoded({
  extended: false
}));

// Connect OrientDB Database
var OrientDB = require('orientjs');
var server = OrientDB({
  host: 'sangumserver.iptime.org',
  port: 2424,
  username: 'root',
  password: 'password123' // Bad Method
});
var db = server.use('zzapcord');

// Login Page (Now it's First Showing Page), But Later Needs Welcome Page
app.get('/', function(req,res){
  res.render('login');
});

// Main Page , After Login
app.get('/main', function(req,res){
  res.render('main');
});

app.listen(80, function() {
  console.log('Connected 80 port!!!');
});
