'use strict';

var http = require('http');

var server = http.createServer(function(req, res) {
    res.writeHead(200, {
        'content-type': 'text/html'
    })
	res.write('Hello world!');
	res.end();
});

server.listen(3000);