'use strict';
function Body(dimensions, data) {
	this.shape = new createjs.Shape();
	this.dimensions = dimensions;
	this.update();
	this.updatePositionText();
}
Body.prototype.update = function () {
	let heightLine = this.dimensions.height / 3,
			heightHeader = this.dimensions.height + 20;
	this.shape.graphics.clear();
	this.shape.graphics.beginStroke("black");
	this.shape.graphics.setStrokeStyle(1);
	for (let i = 1; i < this.dimensions.numCell; i++) {
		this.shape.graphics.moveTo(this.dimensions.x, this.dimensions.y + heightHeader + heightLine * i );
		this.shape.graphics.lineTo(this.dimensions.x + this.dimensions.width, this.dimensions.y +  heightHeader + heightLine * i);
	}
	this.shape.graphics.drawRoundRect(
		this.dimensions.x,
		this.dimensions.y + heightHeader,
		this.dimensions.width,
		heightLine * this.dimensions.numCell ,
		this.dimensions.radius
	);
	this.shape.graphics.endStroke();
	this.updatePositionText();
};
Body.prototype.updatePositionText = function () {

};
Body.prototype.addChildTo = function (stage) {
	stage.addChild(this.shape);
	this.update();
};
Body.prototype.setDimensions = function (dimensions) {
	this.dimensions = dimensions;
	this.update();
};

module.exports = Body;
