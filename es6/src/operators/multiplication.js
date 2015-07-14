import {add} from './addition';

export function multiply(left, right) {
	var total = 0;
	for ( var i = 0; i < left; i++) {
		total = add(total, right);
	}

	return total;
}