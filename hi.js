var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var y = 10;

function draw() {
  ctx.fillStyle = '#f00'
  ctx.fillRect(20,y, 100, 100);
  y++;
}
function clear() {
  ctx.fillStyle = '#fff';
  ctx.clearRect(0, 0, 500, 500);
}
window.setInterval(function() {
  draw();
}, 10);
