'use strict';

var data = {
    d: 'http://www.danielhollands.co.uk/',
    l: 'http://www.limeblast.co.uk/',
    g: 'http://www.google.com/',
    f: 'http://www.facebook.com/',
    t: 'http://www.twitter.com/'
};

var mappings = {
	get: function(url, callback) {
		var alias = url.substring(1);

		if (! data[alias]) {
			return callback(new Error('URL not found.'));
		}

		return callback(null, data[alias]);
	}
};

module.exports = mappings;