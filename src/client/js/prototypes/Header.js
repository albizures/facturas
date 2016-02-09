'use strict';
const moment = require("moment");

function Header(dimensions, data) {
	this.shape = new createjs.Shape();
	this.fecha = new createjs.Text('Fecha: ' + data.fecha, "bold 13px Arial", "black");
	this.nombre = new createjs.Text('Nombre: ' + data.nombre, "bold 13px Arial", "black");
	this.direccion = new createjs.Text('Direccion: ' + data.direccion, "bold 13px Arial", "black");
	this.telefono = new createjs.Text('Telefono: ' + data.telefono, "bold 13px Arial", "black");
	this.nit = new createjs.Text('NIT: ' + data.nit, "bold 13px Arial", "black");
	this.dimensions = dimensions;
	this.update();
	this.updatePositionText();
}
Header.prototype.update = function () {
	let heightLine = this.dimensions.height / 3;
	this.shape.graphics.clear();
	this.shape.graphics.beginStroke("black");
	this.shape.graphics.setStrokeStyle(1);
	this.shape.graphics.moveTo(this.dimensions.x, this.dimensions.y + heightLine);
	this.shape.graphics.lineTo(this.dimensions.x + this.dimensions.width, this.dimensions.y + heightLine);
	heightLine *= 2;
	this.shape.graphics.moveTo(this.dimensions.x, this.dimensions.y + heightLine);
	this.shape.graphics.lineTo(this.dimensions.x + this.dimensions.width, this.dimensions.y + heightLine);
	this.shape.graphics.drawRoundRect(
		this.dimensions.x,
		this.dimensions.y,
		this.dimensions.width,
		this.dimensions.height,
		this.dimensions.radius
	);
	this.shape.graphics.endStroke();
	this.updatePositionText();
};
Header.prototype.updateText = function (data) {
	this.fecha.text = 'Fecha: ' + moment(data.fecha).format('LL');
	this.nombre.text = 'Nombre: ' + data.nombre;
	this.direccion.text = 'Direccion: ' +  data.direccion;
	this.telefono.text = 'Telefono: ' + data.telefono;
	this.nit.text = 'NIT: ' + data.nit;
};
Header.prototype.updatePositionText = function () {
	let heightLine = this.dimensions.height / 3;
	this.fecha.x = this.dimensions.x + 10;
	this.fecha.y = heightLine - (heightLine / 1.6) + this.dimensions.y;

	this.nombre.x = this.dimensions.x + 10;
	this.nombre.y = heightLine * 2 - (heightLine / 1.6) + this.dimensions.y;

	this.telefono.x = (this.dimensions.x + 10)  + this.dimensions.width * 0.5;
	this.telefono.y = heightLine * 2 - (heightLine / 1.6) + this.dimensions.y;

	this.direccion.x = this.dimensions.x + 10;
	this.direccion.y = heightLine * 3 - (heightLine / 1.6) + this.dimensions.y;

	this.nit.x = (this.dimensions.x + 10)  + this.dimensions.width * 0.5;
	this.nit.y = heightLine * 3 - (heightLine / 1.6) + this.dimensions.y;
};
Header.prototype.addChildTo = function (stage) {
	stage.addChild(this.shape);
	stage.addChild(this.nombre);
	stage.addChild(this.direccion);
	stage.addChild(this.fecha);
	stage.addChild(this.nit);
	stage.addChild(this.telefono);
	this.update();
};
Header.prototype.setDimensions = function (dimensions) {
	this.dimensions = dimensions;
	this.update();
};
module.exports = Header;
