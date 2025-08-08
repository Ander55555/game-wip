// terrain.js

const TILE_SIZE = 32;
const ROWS = 20;
const COLS = 25;
let terrain = [];

function generateTerrain() {
  terrain = [];
  for (let row = 0; row < ROWS; row++) {
    terrain[row] = [];
    for (let col = 0; col < COLS; col++) {
      terrain[row][col] = Math.random() < 0.3 ? 1 : 0;
    }
  }
}

function drawTerrain(ctx) {
  if (!terrain || terrain.length === 0) return;

  for (let row = 0; row < terrain.length; row++) {
    for (let col = 0; col < terrain[row].length; col++) {
      if (terrain[row][col] === 1) {
        ctx.fillStyle = "brown";
        ctx.fillRect(col * TILE_SIZE, row * TILE_SIZE, TILE_SIZE, TILE_SIZE);
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
