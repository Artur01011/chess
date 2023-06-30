const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  ctx.fillRect(board());
  board()
})
function board() {
  ctx.fillStyle = 'white';
  ctx.fillRect(650, 50, 50, 50);
  ctx.fillRect(650, 150, 50, 50);
  ctx.fillRect(650, 250, 50, 50);
  ctx.fillRect(650, 350, 50, 50);
  ctx.fillRect(700, 100, 50, 50);
  ctx.fillRect(700, 200, 50, 50);
  ctx.fillRect(700, 300, 50, 50);
  ctx.fillRect(700, 400, 50, 50);
  ctx.fillRect(750, 50, 50, 50);
  ctx.fillRect(750, 150, 50, 50);
  ctx.fillRect(750, 250, 50, 50);
  ctx.fillRect(750, 350, 50, 50);
  ctx.fillRect(800, 100, 50, 50);
  ctx.fillRect(800, 200, 50, 50);
  ctx.fillRect(800, 300, 50, 50);
  ctx.fillRect(800, 400, 50, 50);
  ctx.fillRect(850, 50, 50, 50);
  ctx.fillRect(850, 150, 50, 50);
  ctx.fillRect(850, 250, 50, 50);
  ctx.fillRect(850, 350, 50, 50);
  ctx.fillRect(900, 100, 50, 50);
  ctx.fillRect(900, 200, 50, 50);
  ctx.fillRect(900, 300, 50, 50);
  ctx.fillRect(900, 400, 50, 50);
  ctx.fillRect(950, 50, 50, 50);
  ctx.fillRect(950, 150, 50, 50);
  ctx.fillRect(950, 250, 50, 50);
  ctx.fillRect(950, 350, 50, 50);
  ctx.fillRect(1000, 100, 50, 50);
  ctx.fillRect(1000, 200, 50, 50);
  ctx.fillRect(1000, 300, 50, 50);
  ctx.fillRect(1000, 400, 50, 50);
  //white cages
  ctx.fillStyle = 'black';
  ctx.fillRect(650, 100, 50, 50);
  ctx.fillRect(650, 200, 50, 50);
  ctx.fillRect(650, 300, 50, 50);
  ctx.fillRect(650, 400, 50, 50);
  ctx.fillRect(700, 50, 50, 50);
  ctx.fillRect(700, 150, 50, 50);
  ctx.fillRect(700, 250, 50, 50);
  ctx.fillRect(700, 350, 50, 50);
  ctx.fillRect(750, 100, 50, 50);
  ctx.fillRect(750, 200, 50, 50);
  ctx.fillRect(750, 300, 50, 50);
  ctx.fillRect(750, 400, 50, 50);
  ctx.fillRect(800, 50, 50, 50);
  ctx.fillRect(800, 150, 50, 50);
  ctx.fillRect(800, 250, 50, 50);
  ctx.fillRect(800, 350, 50, 50);
  ctx.fillRect(850, 100, 50, 50);
  ctx.fillRect(850, 200, 50, 50);
  ctx.fillRect(850, 300, 50, 50);
  ctx.fillRect(850, 400, 50, 50);
  ctx.fillRect(900, 50, 50, 50);
  ctx.fillRect(900, 150, 50, 50);
  ctx.fillRect(900, 250, 50, 50);
  ctx.fillRect(900, 350, 50, 50);
  ctx.fillRect(950, 100, 50, 50);
  ctx.fillRect(950, 200, 50, 50);
  ctx.fillRect(950, 300, 50, 50);
  ctx.fillRect(950, 400, 50, 50);
  ctx.fillRect(1000, 50, 50, 50);
  ctx.fillRect(1000, 150, 50, 50);
  ctx.fillRect(1000, 250, 50, 50);
  ctx.fillRect(1000, 350, 50, 50);
  //black cages
}
board()

window.addEventListener('resize', function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  ctx.fillStyle(figurs());
  figurs()
})
function figurs(){

ctx.fillStyle = 'blue'
ctx.beginPath();
ctx.arc(675, 75, 20, 0, 2 * Math.PI);
ctx.arc(725, 75, 20, 0, 2 * Math.PI);
ctx.arc(775, 75, 20, 0, 2 * Math.PI);
ctx.arc(825, 75, 20, 0, 2 * Math.PI);
ctx.arc(875, 75, 20, 0, 2 * Math.PI);
ctx.arc(925, 75, 20, 0, 2 * Math.PI);
ctx.arc(975, 75, 20, 0, 2 * Math.PI);
ctx.arc(1025, 75, 20, 0, 2 * Math.PI);
ctx.arc(675, 75, 20, 0, 2 * Math.PI);
ctx.arc(725, 75, 20, 0, 2 * Math.PI);
ctx.arc(775, 75, 20, 0, 2 * Math.PI);
ctx.arc(825, 75, 20, 0, 2 * Math.PI);
ctx.arc(875, 75, 20, 0, 2 * Math.PI);
ctx.arc(925, 75, 20, 0, 2 * Math.PI);
ctx.arc(975, 75, 20, 0, 2 * Math.PI);
ctx.arc(1025, 75, 20, 0, 2 * Math.PI);
ctx.fill();
//8th horizontal circles
ctx.fillStyle = 'blue'
ctx.beginPath();
ctx.arc(675, 75, 20, 0, 2 * Math.PI);
ctx.arc(725, 75, 20, 0, 2 * Math.PI);
ctx.arc(775, 75, 20, 0, 2 * Math.PI);
ctx.arc(825, 75, 20, 0, 2 * Math.PI);
ctx.arc(875, 75, 20, 0, 2 * Math.PI);
ctx.arc(925, 75, 20, 0, 2 * Math.PI);
ctx.arc(975, 75, 20, 0, 2 * Math.PI);
ctx.arc(1025, 75, 20, 0, 2 * Math.PI);
ctx.arc(675, 75, 20, 0, 2 * Math.PI);
ctx.arc(725, 75, 20, 0, 2 * Math.PI);
ctx.arc(775, 75, 20, 0, 2 * Math.PI);
ctx.arc(825, 75, 20, 0, 2 * Math.PI);
ctx.arc(875, 75, 20, 0, 2 * Math.PI);
ctx.arc(925, 75, 20, 0, 2 * Math.PI);
ctx.arc(975, 75, 20, 0, 2 * Math.PI);
ctx.arc(1025, 75, 20, 0, 2 * Math.PI);
ctx.fill();
} 
figurs()