function drawCar(x, y, w, h, angle, cvs123) {
if (!cvs123) {
cvs123 = document.getElementsByTagName("canvas")[0].getContext("2d");
}
cvs123.save();
cvs123.translate(x, y);
cvs123.lineWidth = w/60;
cvs123.rotate(-angle);
cvs123.strokeStyle = "black";
cvs123.fillStyle = "black";
// wheels
cvs123.fillRect(h*0.15, -w/2, h*0.20, w);
cvs123.fillRect(-h*0.38, -w/2, h*0.20, w);
cvs123.fillStyle = "silver";
// bumper
roundRect(-h*0.4, 0, h*0.2, w*0.8 - w/5, w/20, true, true, cvs123);
// headlights
cvs123.fillStyle = "yellow";
cvs123.beginPath();
cvs123.arc(h/2 - h*0.07, -w/5, h*0.07, Math.PI*2, 0, false);
cvs123.fill();
cvs123.stroke();
cvs123.closePath();
cvs123.beginPath();
cvs123.arc(h/2 - h*0.07, w/5, h*0.07, Math.PI*2, 0, false);
cvs123.fill();
cvs123.stroke();
cvs123.closePath();
// car body
cvs123.lineWidth = w / 50;
cvs123.fillStyle = "red";
roundRect(-h*0.01, 0, h*0.93, w*0.8, w/10, true, true, cvs123);
roundRect(h/3.5, 0, h*0.25, w*0.65, w/10, true, true, cvs123);
cvs123.fillRect(0, -w/3.2, h/4, w/1.6);
// windows
cvs123.fillStyle = "rgb(70,170,255)";
cvs123.beginPath();
// front window
cvs123.moveTo(h/7, -w/3.24);
cvs123.lineTo(h/20, -w/5);
cvs123.lineTo(h/20, w/5);
cvs123.lineTo(h/7, w/3.24);
cvs123.lineTo(h/7, -w/3.24);
// left window
cvs123.lineTo(-h/3,-w/3.24);
cvs123.lineTo(-h/4, -w/5);
cvs123.lineTo(h/20, -w/5);
// back window
cvs123.moveTo(-h/3,-w/3.24);
cvs123.lineTo(-h/3,w/3.24);
cvs123.lineTo(-h/4, w/5);
cvs123.lineTo(-h/4, -w/5);
// right window
cvs123.moveTo(-h/4, w/5);
cvs123.lineTo(h/20, w/5);
cvs123.lineTo(h/7, w/3.24);
cvs123.lineTo(-h/3,w/3.24);
cvs123.fill();
cvs123.stroke();
cvs123.closePath();
cvs123.restore();
}