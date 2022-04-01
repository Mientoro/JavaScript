function drawPlane(x, y, w, h, angle, cvs123) {
if (!cvs123) {
cvs123 = document.getElementsByTagName("canvas")[0].getContext("2d");
}
cvs123.save();
cvs123.translate(x, y);
cvs123.rotate(-angle);
cvs123.fillStyle = "lightgrey";
cvs123.strokeStyle = "black";
cvs123.lineWidth = w / 75;
// body
cvs123.beginPath();
// tail
cvs123.moveTo(-h/2.5, -w/13);
cvs123.lineTo(-h/2, -w/10);
cvs123.lineTo(-h/2, w/10);
cvs123.lineTo(-h/2.5, w/13);
cvs123.lineTo(h/3.5,w/13);
// nose
cvs123.quadraticCurveTo(h/1.4, 0, h/3.5, -w/13);
cvs123.lineTo(-h/2.5, -w/13);
cvs123.fill();
cvs123.stroke();
cvs123.closePath();
// left wing
cvs123.beginPath();
cvs123.moveTo(h/5, -w/13);
cvs123.lineTo(-h/6, -w/2.2);
cvs123.lineTo(-h/3, -w/2);
cvs123.lineTo(-h/5, -w/13);
cvs123.fill();
cvs123.stroke();
cvs123.closePath();
// inside left wing
cvs123.lineWidth = w / 125;
cvs123.beginPath();
cvs123.moveTo(h/5 - h/13, -w/13 - w/40);
cvs123.lineTo(-h/6 - h/45, -w/2.2 + w/40);
cvs123.lineTo(-h/3 + h/22, -w/2 + w/25);
cvs123.lineTo(-h/5 + h/30, -w/13 - w/40);
cvs123.lineTo(h/5 - h/13, -w/13 - w/40);
cvs123.fill();
cvs123.stroke();
cvs123.closePath();
// right wing
cvs123.lineWidth = w / 75;
cvs123.beginPath();
cvs123.moveTo(h/5, w/13);
cvs123.lineTo(-h/6, w/2.2);
cvs123.lineTo(-h/3, w/2);
cvs123.lineTo(-h/5, w/13);
cvs123.fill();
cvs123.stroke();
cvs123.closePath();
// inside right wing
cvs123.lineWidth = w / 125;
cvs123.beginPath();
cvs123.moveTo(h/5 - h/13, w/13 + w/40);
cvs123.lineTo(-h/6 - h/45, w/2.2 - w/40);
cvs123.lineTo(-h/3 + h/22, w/2 - w/25);
cvs123.lineTo(-h/5 + h/30, w/13 + w/40);
cvs123.lineTo(h/5 - h/13, w/13 + w/40);
cvs123.fill();
cvs123.stroke();
cvs123.closePath();
// windows
cvs123.fillStyle = "black";
for (var a = 0; a < 11; a ++) {
cvs123.beginPath();
cvs123.arc(h/4.3 - a * w/20, -w/22, w/70, 0, Math.PI * 2, true);
cvs123.fill();
cvs123.closePath();
}
for (var a = 0; a < 11; a ++) {
cvs123.beginPath();
cvs.arc(h/4.3 - a * w/20, w/22, w/70, 0, Math.PI * 2, true);
cvs123.fill();
cvs123.closePath();
}
// cockpit window
cvs123.lineWidth = w / 75;
cvs123.globalCompositeOperation='source-atop';
cvs123.fillStyle = "rgb(70,170,255)";
cvs123.fillRect(h/3, -w/13, h/13, w/6.5);
cvs123.beginPath();
cvs123.moveTo(h/3.5,w/13);
cvs123.quadraticCurveTo(h/1.4, 0, h/3.5, -w/13);
cvs123.stroke();
cvs123.closePath();
cvs123.restore();
}