'use strict';

var http = require('http');

var express = require('express');

var logger = require('./logger'),
	mappings = require('./data/mappings');

var app = express();

app.use(logger('redirector'));

app.get('/', function(req, res) {
	res.send('Hello redirector');
});

app.get('/:alias', function(req, res) {
	mappings.get(req.params.alias, function(err, mapping) {

		if (err) {
			res.writeHead(404);
			return res.end();
		}

		res.writeHead(302, {'location': mapping})
		res.end();
	});
});

http.createServer(app).listen(3000);