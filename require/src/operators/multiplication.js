// multiplication.js

define(['operators/addition'], function (addition) {

	return {
		multiply: function (left, right) {
			var total = 0;

			for ( var i = 0; i < left; i++) {
				total = addition.add(total, right);
			}

			return total;
		}
	};
});