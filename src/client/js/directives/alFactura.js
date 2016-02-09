const Header = require("../prototypes/Header.js"),

	link = function (scope, element) {
		let context = element[0].getContext('2d'),
			stage = new createjs.Stage(element[0]),
			header = new Header(scope.header.dimensions, scope.header.data);

		header.addChildTo(stage);

		function onResize(evt) {
			console.log('lelel');
			context.canvas.height = window.innerHeight;
			context.canvas.width = context.canvas.clientWidth;
		}

		function paint() {
			onResize();
			header.setDimensions(scope.header.dimensions);
			stage.update();
		}
		scope.$watch('header.data', function (newVal, oldVal) {
			if (newVal) {
				header.updateText(newVal);
				stage.update();
			}
		}, true);
		scope.$watch('header.dimensions', function (newVal, oldVal) {
			if (newVal) {
				paint();
			}
		}, true);
		paint();
	};
angular.module('directives').directive('alFactura', function () {
	return {
		restrict: 'A',
		scope: {
			header: '='
		},
		link: link
	};
});
