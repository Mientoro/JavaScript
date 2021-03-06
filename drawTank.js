function drawTank(x, y, w, h, angle, cvs123) {
if (!cvs123) {
cvs123 = document.getElementsByTagName("canvas")[0].getContext("2d");
}
cvs123.save();
cvs123.translate(x, y);
cvs123.rotate(-angle);
cvs123.lineWidth = w / 50;
cvs123.strokeStyle = "black";
cvs123.fillStyle = "maroon";
cvs123.beginPath();
cvs123.arc(-h/2 + w*0.15, -w*0.35, w*0.15, Math.PI/2, -Math.PI/2, false);
cvs123.arc(h/2 - w*0.15, -w*0.35, w*0.15, -Math.PI/2, Math.PI/2, false);
cvs123.moveTo(h/2 - w*0.15, -w*0.2);
cvs123.lineTo(-h/2 + w*0.15, -w*0.2);
cvs123.fill();
cvs123.stroke();
cvs123.closePath();
cvs123.beginPath();
cvs123.arc(-h/2 + w*0.15, w*0.35, w*0.15, Math.PI/2, -Math.PI/2, false);
cvs123.arc(h/2 - w*0.15, w*0.35, w*0.15, -Math.PI/2, Math.PI/2, false);
cvs123.moveTo(-h/2 + w*0.15, w/2);
cvs123.lineTo(h/2 - w*0.15, w/2);
cvs123.fill();
cvs123.stroke();
cvs123.closePath();
cvs123.lineWidth = w / 25;
cvs123.globalCompositeOperation='source-atop';
cvs123.beginPath();
cvs123.moveTo(-h*0.45, -w/2);
cvs123.lineTo(-h*0.45, w/2);
cvs123.moveTo(-h*0.35, -w/2);
cvs123.lineTo(-h*0.35, w/2)
cvs123.moveTo(-h*0.25, -w/2);
cvs123.lineTo(-h*0.25, w/2);
cvs123.moveTo(-h*0.15, -w/2);
cvs123.lineTo(-h*0.15, w/2);
cvs123.moveTo(-h*0.05, -w/2);
cvs123.lineTo(-h*0.05, w/2);
cvs123.moveTo(h*0.45, -w/2);
cvs123.lineTo(h*0.45, w/2);
cvs123.moveTo(h*0.35, -w/2);
cvs123.lineTo(h*0.35, w/2)
cvs123.moveTo(h*0.25, -w/2);
cvs123.lineTo(h*0.25, w/2);
cvs123.moveTo(h*0.15, -w/2);
cvs123.lineTo(h*0.15, w/2);
cvs123.moveTo(h*0.05, -w/2);
cvs123.lineTo(h*0.05, w/2);
cvs123.stroke();
cvs123.closePath();
cvs123.globalCompositeOperation='source-over';
cvs123.fillStyle = "rgb(50,130,0)";
roundRect(0, 0, h*.7, w*.8, w/5, true, true, cvs123);
cvs123.strokeStyle = "black";
cvs123.lineCap = "round";
cvs123.beginPath();
cvs123.arc(-h/7.5, 0, Math.min(w,h)/7, 0, Math.PI * 2, false);
cvs123.moveTo(-h/7.5, -Math.min(w,h)/7);
cvs123.lineTo(-h/7.5, Math.min(w,h)/7);
cvs123.moveTo(-h/7.5 - Math.min(w,h)/7, 0);
cvs123.lineTo(-h/7.5 + Math.min(w,h)/7, 0);
cvs123.stroke();
cvs123.closePath();
cvs123.lineWidth = w / 10;
cvs123.beginPath();
cvs123.moveTo(h/8,0);
cvs123.lineTo(h/2,0);
cvs123.stroke();
cvs123.closePath();
cvs123.restore();
}