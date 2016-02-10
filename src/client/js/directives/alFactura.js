'use strict';
const Header = require("../prototypes/Header.js"),
			Body = require("../prototypes/Body.js"),
	link = function (scope, element) {
		let context = element[0].getContext('2d'),
			stage = new createjs.Stage(element[0]),
			header = new Header(scope.dimensions, scope.header),
			body = new Body(scope.dimensions, scope.cells);

		header.addChildTo(stage);
		body.addChildTo(stage);

		function onResize(evt) {
			context.canvas.height = window.innerHeight;
			context.canvas.width = context.canvas.clientWidth;
		}

		function paint() {
			onResize();
			header.setDimensions(scope.dimensions);
			body.setDimensions(scope.dimensions);
			stage.update();
		}
		scope.$watch('header', function (newVal, oldVal) {
			if (newVal) {
				header.updateText(newVal);
				stage.update();
			}
		}, true);
		scope.$watch('dimensions', function (newVal, oldVal) {
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
			header: '=',
			dimensions : '='
		},
		link: link
	};
});
