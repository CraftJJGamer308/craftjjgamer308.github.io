var canvas = document.querySelector("canvas");

var w = canvas.width = window.innerWidth;
var h = canvas.height = window.innerHeight;

var ctx = canvas.getContext('2d');

function stroke(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}

function circle(x, y, r) {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2, false);
    ctx.stroke();
}

function setStyle(strokeColor, fillColor) {
    ctx.fillStyle = fillColor;
    //ctx.strokeStyle = strokeColor;
}

setStyle("hotpink","slateblue");
circle(10,10,10);