'use strict';
const angular = require("angular"),
			easel = require("./easel.min.js");

console.log(easel);
require('../style/index.styl');
require('./app.js');


angular.bootstrap(document.body, ['app']);
