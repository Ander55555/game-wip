// game.js

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const keys = {};
let localPlayer;

// Key listeners
document.addEventListener("keydown", e => keys[e.key] = true);
document.addEventListener("keyup", e => keys[e.key] = false);

// Main game loop
function gameLoop() {
  if (!localPlayer) {
    console.warn("localPlayer not initialized yet");
    return requestAnimationFrame(gameLoop);
  }

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawTerrain(ctx);

  localPlayer.update(keys);
  localPlayer.draw(ctx);

  requestAnimationFrame(gameLoop);
}

// Initialize game
window.onload = () => {
  generateTerrain(); // ✅ Create terrain first
  localPlayer = new Player(100, 100); // ✅ Spawn player
  gameLoop();
};
