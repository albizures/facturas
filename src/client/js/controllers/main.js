const moment = require("moment");

angular.module('controllers').controller('main', function ($scope) {
	$scope.dimensions = {
		x: 10,
		y: 10,
		width: 500,
		height: 100,
		radius: 10,
		numCell : 4
	},
	$scope.header = {
		fecha : moment(),
		nombre : 'Jose Albizures',
		direccion : 'Guatemala',
		nit : '9004040-9',
		telefono : '50086682'
	};
});
