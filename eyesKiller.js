// comment
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

function Rect(x, y) {
  this.x = x;
  this.y = y;
  this.blink = false;
  this.color = '#'+Math.floor(Math.random()*16777215).toString(16);
  this.draw = function() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x,this.y, 10, 10);
    this.y++;
    this.x += 20;
    if (this.x > 600)
      this.x = 0;
    if (this.y > 500)
      this.y = 0;
    if (this.blink) {
      this.color = '#000';
    } else {
      this.color = '#'+Math.floor(Math.random()*16777215).toString(16);
    }
    this.blink = !this.blink;
  }
}
function clear() {
  ctx.clearRect(0, 0, 600, 500);
}
var rect1 = new Rect(10, 10)
var rect2 = new Rect(20, 199)
var rect3 = new Rect(300,20)
window.setInterval(function() {
  clear();
  rect1.draw();
  rect2.draw();
  rect3.draw();
}, 100);
