

//  x: the x coordinate of the origin of the angle
//  y: the y coordinate of the origin of the angle
//  coordX: the x coordinate of the point from which the angle is calculated
//  coordY: the y coordinate of the point from which the angle is calculated


function getAngle(x, y, coordX, coordY) {
var a = coordX - x;
var o = y - coordY;
var h = Math.sqrt(a*a + o*o);
var ang = Math.asin(o / h);
var ySpeed = -Math.asin(o / h);
var xSpeed = Math.asin(a / h);
if (o >= 0 && a < 0) ang = Math.PI - ang;
else if (o < 0 && a < 0) ang = -Math.PI - ang;
return { angle:ang, xSp:xSpeed, ySp:ySpeed, dist:h };
}


