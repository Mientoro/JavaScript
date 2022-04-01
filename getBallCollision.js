 
//  takes in two objects, each with these properties:
//  x: x coordinate of center of ball
//  y: y coordinate of center of ball
//  r/rad/radius: radius of ball
//  vx/xSp/xSpeed: velocity of ball along x-axis
//  vy/xSp/xSpeed: velocity of ball along y-axis
//  m/mass: mass of ball
//  if the balls do not collide, the function will return false


function getBallCollision(ball1, ball2) {
	b1 = {x:0, y:0, r:0, vx:0, vy:0, m:0};
	b2 = {x:0, y:1, r:0, vx:0, vy:0, m:0};
	b1.x = ball1.x;
	b2.x = ball2.x;
	b1.y = ball1.y;
	b2.y = ball2.y;
	if (ball1.rad) b1.r = ball1.rad;
	else if (ball1.radius) b1.r = ball1.radius;
	else if (ball1.r) b1.r = ball1.r;
	if (ball2.rad) b2.r = ball2.rad;
	else if (ball2.radius) b2.r = ball2.radius;
	else if (ball2.r) b2.r = ball2.r;
	if (ball1.xSpeed) b1.vx = ball1.xSpeed;
	else if (ball1.xspeed) b1.vx = ball1.xspeed;
	else if (ball1.xSp) b1.vx = ball1.xSp;
	else if (ball1.xsp) b1.vx = ball1.xsp;
	else if (ball1.vx) b1.vx = ball1.vx;
	if (ball1.ySpeed) b1.vy = ball1.ySpeed;
	else if (ball1.yspeed) b1.vy = ball1.yspeed;
	else if (ball1.ySp) b1.vy = ball1.ySp;
	else if (ball1.ysp) b1.vy = ball1.ysp;
	else if (ball1.vy) b1.vy = ball1.vy;
	if (ball2.xSpeed) b2.vx = ball2.xSpeed;
	else if (ball2.xspeed) b2.vx = ball2.xspeed;
	else if (ball2.xSp) b2.vx = ball2.xSp;
	else if (ball2.xsp) b2.vx = ball2.xsp;
	else if (ball2.vx) b2.vx = ball2.vx;
	if (ball2.ySpeed) b2.vy = ball2.ySpeed;
	else if (ball2.yspeed) b2.vy = ball2.yspeed;
	else if (ball2.ySp) b2.vy = ball2.ySp;
	else if (ball2.ysp) b2.vy = ball2.ysp;
	else if (ball2.vy) b2.vy = ball2.vy;
	if (ball1.mass) b1.m = ball1.mass;
	else if (ball1.m) b1.m = ball1.m;
	if (ball2.mass) b2.m = ball2.mass;
	else if (ball2.m) b2.m = ball2.m;
	var dx = b1.x - b2.x;
	var dy = b1.y - b2.y;
	var dist = Math.sqrt(dx*dx + dy*dy);
	if (Math.abs(dy) + Math.abs(dx) != 0 && dist < b1.r + b2.r) {
	var colAng = Math.atan2(dy, dx);
	var sp1 = Math.sqrt(b1.vx*b1.vx + b1.vy*b1.vy);
	var sp2 = Math.sqrt(b2.vx*b2.vx + b2.vy*b2.vy);
	var dir1 = Math.atan2(b1.vy, b1.vx);
	var dir2 = Math.atan2(b2.vy, b2.vx);
	var vx1 = sp1 * Math.cos(dir1 - colAng);
	var vy1 = sp1 * Math.sin(dir1 - colAng);
	var vx2 = sp2 * Math.cos(dir2 - colAng);
	var vy2 = sp2 * Math.sin(dir2 - colAng);
	var fvx1 = ((b1.m - b2.m) * vx1 + (2 * b2.m) * vx2) / (b1.m + b2.m);
	var fvx2 = ((2 * b1.m) * vx1 + (b2.m - b1.m) * vx2) / (b1.m + b2.m);
	var fvy1 = vy1;
	var fvy2 = vy2;
	b1.vx = Math.cos(colAng) * fvx1 + Math.cos(colAng + Math.PI/2) * fvy1;
	b1.vy = Math.sin(colAng) * fvx1 + Math.sin(colAng + Math.PI/2) * fvy1;
	b2.vx = Math.cos(colAng) * fvx2 + Math.cos(colAng + Math.PI/2) * fvy2;
	b2.vy = Math.sin(colAng) * fvx2 + Math.sin(colAng + Math.PI/2) * fvy2;
	return { vx1:b1.vx, xSp1:b1.vx, xsp1:b1.vx, xSpeed1:b1.vx, xspeed1:b1.vx, vy1:b1.vy, ySp1:b1.vy, ysp1:b1.vy, ySpeed1:b1.vy, yspeed1:b1.vy, vx2:b2.vx, xSp2:b2.vx, xsp2:b2.vx, xSpeed2:b2.vx, xspeed2:b2.vx, vy2:b2.vy, ySp2:b2.vy, ysp2:b2.vy, ySpeed2:b2.vy, yspeed2:b2.vy }}
}

