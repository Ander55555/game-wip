const TILE_SIZE = 20;
const ROWS = 30;
const COLS = 40;

let terrain = [];

function generateTerrain() {
  terrain = Array.from({ length: ROWS }, () =>
    Array.from({ length: COLS }, () => 1)
  );
}

function drawTerrain(ctx) {
  for (let y = 0; y < ROWS; y++) {
    for (let x = 0; x < COLS; x++) {
      if (terrain[y][x] === 1) {
        ctx.fillStyle = "#654321";
        ctx.fillRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
      }
    }
  }
}

function dig(x, y) {
  const col = Math.floor(x / TILE_SIZE);
  const row = Math.floor(y / TILE_SIZE);
  if (terrain[row] && terrain[row][col] === 1) {
    terrain[row][col] = 0;
    return true;
  }
  return false;
}
