// calc.js

import $ from 'jquery';
import {add} from './operators/addition';
import {multiply} from './operators/multiplication';

$('#go').on('click', function () {
	var left = parseFloat($('#left').val());
	var right = parseFloat($('#right').val());
	
	$('#result').text(multiply(left, right));
});
