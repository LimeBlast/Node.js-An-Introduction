'use strict';

var data = {
    d: 'http://www.danielhollands.co.uk/',
    l: 'http://www.limeblast.co.uk/',
    g: 'http://www.google.com/',
    f: 'http://www.facebook.com/',
    t: 'http://www.twitter.com/'
};

var mappings = {
	get: function(url) {
		var alias = url.substring(1);

		if (! data[alias]) {
			return undefined;
		}

		return data[alias];
	}
};

module.exports = mappings;