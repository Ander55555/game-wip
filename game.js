// game.js

// Canvas setup
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Input tracking
const keys = {};

// Player instance
let localPlayer;

// Listen for key presses
document.addEventListener("keydown", e => keys[e.key] = true);
document.addEventListener("keyup", e => keys[e.key] = false);

// Main game loop
function gameLoop() {
  if (!localPlayer) {
    console.warn("localPlayer not initialized yet");
    return requestAnimationFrame(gameLoop);
  }

  // Clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw terrain
  drawTerrain(ctx);

  // Update and draw player
  localPlayer.update(keys);
  localPlayer.draw(ctx);

  // Continue loop
  requestAnimationFrame(gameLoop);
}

// Initialize game after DOM is ready
window.onload = () => {
  // Create player at starting position (adjust as needed)
  localPlayer = new Player(100, 100);

  // Optional: log to confirm
  console.log("Player initialized:", localPlayer);

  // Start game loop
  gameLoop();
};
