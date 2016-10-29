/**
 * Intended for serving public, static assets.
 */

var config = require('../config/config');
var ejs = require('ejs');
var express = require('express');
var app = express();
var port = config.PORT.FRONTEND || 80;

// Set the default view templating engine.
app.engine('html', ejs.renderFile);
app.set('view engine', 'html');
app.set('views', 'public/views');

// Setup routing.
app.use(express.static('public'));

app.get('/login', function (req, res) {
	res.render('login.html');
});

app.get('/deep', function (req, res) {
	res.render('deep.html');
});

app.get('/', function (req, res) {
	res.render('index.html');
});

app.use(function (req, res) {
	res.render('404.html');
});


app.listen(port);
console.log('FRONTEND listening on port', port);
