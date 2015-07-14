// multiplication.js

'use strict';

var addition = require('./addition');

exports.multiply = function (left, right) {
	var total = 0;

	for ( var i = 0; i < left; i++) {
		total = addition.add(total, right);
	}

	return total;
};
