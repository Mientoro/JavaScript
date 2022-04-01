function getBallOnLine(ball, line) {
	line.w = line.x1 - line.x2;
	line.h = line.y1 - line.y2;
	line.slope = (line.y1 - line.y2) / (line.x1 - line.x2);
	if (line.slope.toString() == "Infinity") line.slope = 1;
	if (line.slope.toString() == "-Infinity") line.slope = -1;
	var ballx = line.x1 - ball.x;
	var bally = line.y1 - ball.y;
	var yDist = (line.h - bally) - (line.h / line.w) * (line.w - ballx);
	var xDist = (line.w - ballx) - (line.w / line.h) * (line.h - bally);
	var dist = Math.min(Math.abs(Math.cos(Math.atan(line.h / line.w)) * yDist), Math.abs(Math.cos(Math.atan(line.w / line.h)) * xDist));
	var xOff = Math.sin(Math.atan(line.h / line.w)) * dist * Math.abs(xDist) / -xDist * Math.abs(line.slope) / line.slope;
	if (xOff.toString() == "NaN") xOff = 0;
	var yOff = Math.cos(Math.atan(line.h / line.w)) * dist * Math.abs(yDist) / -yDist;
	if (yOff.toString() == "NaN") yOff = 0;
	var lineX = ball.x + xOff;
	var lineY = ball.y + yOff;
	lineX = Math.max(lineX, Math.min(line.x1, line.x2));
	lineX = Math.min(lineX, Math.max(line.x1, line.x2));
	lineY = Math.max(lineY, Math.min(line.y1, line.y2));
	lineY = Math.min(lineY, Math.max(line.y1, line.y2));
	return { x:lineX, y:lineY };
}