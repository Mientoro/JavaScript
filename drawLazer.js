function drawLazer(x1, y1, x2, y2, w, iteration, cvs123) {
if (!cvs123) {
cvs123 = document.getElementsByTagName("canvas")[0].getContext("2d");
}
if (!iteration) iteration = 1;
cvs123.save();
var a = getAngle(x1, y1, x2, y2);
cvs123.translate(x1, y1);
cvs123.rotate(-a.angle);
for (var g = 0; g < iteration; g ++) {
cvs123.beginPath();
cvs123.moveTo(0,0);
var c = a.dist/w*3;
for (var b = 1; b < c; b ++) {
var d = Math.random()*w*0.45 - Math.random()*w*0.45;
var f = Math.random()*a.dist/c/3 - Math.random()*a.dist/c/3;
if (d < 0) d -= w*0.1;
else d += w*0.1;
cvs123.lineTo(a.dist/c*b + f,d);
}
cvs123.lineTo(a.dist,0);
cvs123.stroke();
cvs123.closePath();
}
cvs123.restore();
}