/**
 * Intended for serving backend endpoints.
 */

var config = require('../config/config');
var winston = require('winston');
var express = require('express');
var app = express();
var port = config.PORT.BACKEND || 8000;


// Setup routing.
app.get('/', function (req, res) {
	
});

app.use(function (req, res) {
	
});

var logger = new (winston.Logger)({
	transports: [
		new (winston.transports.Console)(),
		new (winston.transports.File)({ filename: 'server/logs/backend_'+Date.now()+'.log' })
	]
});


app.listen(port);
console.log('BACKEND listening on port', port);
