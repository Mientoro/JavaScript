function drawCoin(x,y,r,angle, cvs123) {
if (!cvs123) {
cvs123 = document.getElementsByTagName("canvas")[0].getContext("2d");
}
cvs123.save();
cvs123.globalCompositeOperation = "source-over";
cvs123.translate(x,y);
cvs123.rotate(-angle);
cvs123.fillStyle = "yellow";
cvs123.beginPath();
cvs123.arc(0,0,r,0,Math.PI*2,true);
cvs123.fill();
cvs123.closePath();
cvs123.restore();
cvs123.save();
cvs123.translate(x,y);
cvs123.rotate(-angle+0.6);
cvs123.fillStyle = "gold";
cvs123.beginPath();
cvs123.arc(0,0,r,-Math.PI/3,Math.PI/3,false);
cvs123.fill();
cvs123.closePath();
cvs123.fillStyle = "yellow";
cvs123.beginPath();
cvs123.arc(-r,0,r*1.7,-Math.PI/6,Math.PI/6,false);
cvs123.fill();
cvs123.closePath();
cvs123.restore();
cvs123.save();
cvs123.translate(x,y);
cvs123.rotate(-angle);
cvs123.textAlign = "center";
cvs123.textBaseline = "middle";
cvs123.font = (r*1.5) + "px arial";
cvs123.lineWidth = r/8;
cvs123.fillStyle = "black";
cvs123.fillText("$",0,0);
cvs123.strokeStyle = "grey";
cvs123.beginPath();
cvs123.arc(0,0,r,0,Math.PI*2,true);
cvs123.stroke();
cvs123.closePath();
cvs123.restore();
}