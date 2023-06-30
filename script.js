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
  let CELL_SIZE = 50;
  let INITIAL_X = 650;
  let INITIAL_Y = 50;
  let CELLS_NUMBER = 8;

  for(let r = 0; r < CELLS_NUMBER; ++r) {
    for(let c = 0; c < CELLS_NUMBER; ++c) {
      if ((r % 2 == 0 && c % 2 == 0) || (r % 2 != 0 && c % 2 != 0)) {
        ctx.fillStyle = 'white';
      } else {
        ctx.fillStyle = 'black';
      }
      ctx.fillRect(INITIAL_X + c * CELL_SIZE, INITIAL_Y + r * CELL_SIZE, CELL_SIZE, CELL_SIZE);
    }
  }
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