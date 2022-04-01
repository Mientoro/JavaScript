

//  myCanvas: the canvas element object's 2D context
//  x: the x coordinate of the center of the rectangle
//  y: the y coordinate of the center of the rectangle
//  w: the width of the rectangle
//  h: the height of the rectangle
//  r: the radius of the corner curves
//  stroke: a boolean variable, if true, the rectangle will have a border
//  fill: a boolean variable, if true, the rectangle will have a color fill


function roundRect(x, y, w, h, r, stroke, fill, myCanvas) {
if (!myCanvas) {
myCanvas = document.getElementsByTagName("canvas")[0].getContext("2d");
}
myCanvas.beginPath();
myCanvas.moveTo(x - w / 2, y + h / 2 - r);
myCanvas.lineTo(x - w / 2, y - h / 2 + r);
myCanvas.arc(x - w / 2 + r, y - h / 2 + r, r, -Math.PI, -Math.PI/2, false);
myCanvas.lineTo(x + w / 2 - r, y - h / 2);
myCanvas.arc(x + w / 2 - r, y - h / 2 + r, r, -Math.PI / 2, 0, false);
myCanvas.lineTo(x + w / 2, y + h / 2 - r);
myCanvas.arc(x + w / 2 - r, y + h / 2 - r, r, 0, Math.PI / 2, false);
myCanvas.lineTo(x - w / 2 + r, y + h / 2);
myCanvas.arc(x - w / 2 + r, y + h / 2 - r, r, Math.PI / 2, Math.PI, false);
if (fill) myCanvas.fill();
if (stroke) myCanvas.stroke();
myCanvas.closePath();
}



