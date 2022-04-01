function drawStar(x, y, r, points, curve, angle, cvs123) {
var angle123 = Math.PI - (points-2) * Math.PI / points;
if (!cvs123) {
cvs123 = document.getElementsByTagName("canvas")[0].getContext("2d");
}
cvs123.save();
cvs123.translate(x,y);
cvs123.rotate(-angle);
cvs123.beginPath();
cvs123.moveTo(Math.sin(angle123/2)*-r,Math.sin(angle1234)*-r);
for (var a = 0; a < points+1; a ++) {
var angle1234 = Math.PI/2 - angle123/2;
cvs123.quadraticCurveTo(0,-r * curve, Math.sin(angle123/2)*r,Math.sin(angle1234)*-r);
cvs123.rotate(angle123);
}
cvs123.fill();
cvs123.stroke();
cvs123.closePath();
cvs123.restore();
}