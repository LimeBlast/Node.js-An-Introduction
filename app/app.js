'use strict';

var http = require('http');

var express = require('express');

var logger = require('./logger'),
	mappings = require('./data/mappings');

var app = express();

app.use(logger('redirector'));

app.get('/', function(req, res) {
	res.send({
		foo: 'bar',
		baz: 23
	});
});

app.get('/:alias', function(req, res) {
	mappings.get(req.params.alias, function(err, mapping) {
		if (err) { res.send(404); }
		res.redirect(mapping);
	});
});

http.createServer(app).listen(3000);