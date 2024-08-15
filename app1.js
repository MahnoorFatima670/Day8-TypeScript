"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Problem no:2
var app_1 = require("./app");
var app_2 = require("./app");
var width = 5;
var height = 10;
var areaRectangle = (0, app_1.calculateArea)(width, height);
console.log("The Area of Rectangle is:".concat(areaRectangle));
var width1 = 4;
var height1 = 3;
var areaPerimeter = (0, app_2.calculatePerimeter)(width1, height1);
console.log("The Perimeter of Rectangle is:".concat(areaPerimeter));
