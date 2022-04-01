
//  e: the event captured on "touchstart" and "touchend" event listeners

//  call getSwipe() with a touchstart and a touchend event


var t123 = {time:0, start:true};

function getSwipe(e) {
if (e.changedTouches && t123.start) {
t123.x1 = e.changedTouches[0].pageX;
t123.y1 = e.changedTouches[0].pageY;
t123.start = false;
t123.time = 0;
t123.swipeInt = setInterval(countingSwipe,1);
}
else if (e.changedTouches) {
clearInterval(t123.swipeInt)
t123.x2 = e.changedTouches[0].pageX;
t123.y2 = e.changedTouches[0].pageY;

if (getAngle(t123.x1, t123.y1, t123.x2, t123.y2)) {
var ang1 = getAngle(t123.x1, t123.y1, t123.x2, t123.y2);
t123.angle = ang1.angle;
t123.xSp = ang1.xSp;
t123.ySp = ang1.ySp;
t123.d = ang1.dist;
}

t123.start = true;
return t123;
}
e.preventDefault();
}

function countingSwipe() {
t123.time ++;
}

