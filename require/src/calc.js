// calc.js

require.config({
	paths: {
		"jquery": "jquery-2.1.3.min"
	}
});

require(['jquery', 'operators/addition', 'operators/multiplication'], function ($, addition, multiplication) {

	$('#go').on('click', function () {
		var left = parseFloat($('#left').val());
		var right = parseFloat($('#right').val());
		$('#result').text(multiplication.multiply(left, right));
	});

});