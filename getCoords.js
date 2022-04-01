

//call getCoords() with a "touchstart", "touchmove", or "touchend" event listener

//returns all touch coordinates on the screen in an array, each index is an object with 'x' and 'y' properties


function getCoords(e) {
var allTouches = [];
if (e.targetTouches) {
for (var i = 0; i < e.targetTouches.length; i++) {
allTouches.push(getTouchCoords(e.targetTouches[i]));
}
}
e.preventDefault();
return allTouches;
}

function getTouchCoords(e) {
if (e.offsetX) {
return { x: e.offsetX, y: e.offsetY };
}
else if (e.layerX) {
return { x: e.layerX, y: e.layerY };
}
else {
return { x: e.pageX, y: e.pageY };
}
}


