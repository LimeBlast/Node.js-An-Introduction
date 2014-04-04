'use strict';

var http = require('http');

var mappings = {
    g: 'http://www.google.com/',
    f: 'http://www.facebook.com/',
    t: 'http://www.twitter.com/',
};

var server = http.createServer(function(req, res) {
    var alias = req.url.substring(1); // stripping the prefixed slash from the url

    if (! mappings[alias]) {
        res.writeHead(404);
        return res.end();
    }

    res.writeHead(302, {
        'location': mappings[alias]
    })
	res.end();
});

server.listen(3000);