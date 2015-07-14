// calc.js

var $ = require('jquery');
var addition = require('./operators/addition');
var multiplication = require('./operators/multiplication');

$('#go').on('click', function () {
	var left = parseFloat($('#left').val());
	var right = parseFloat($('#right').val());

	$('#result').text(multiplication.multiply(left, right));
});
