const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let keys = {};
let player = new Player(100, 100);

generateTerrain();

document.addEventListener("keydown", e => keys[e.key] = true);
document.addEventListener("keyup", e => keys[e.key] = false);

function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawTerrain(ctx);

  localPlayer.update(keys);
  localPlayer.draw(ctx);

  requestAnimationFrame(gameLoop);
}

gameLoop();
