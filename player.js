// player.js

class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = 32;
    this.speed = 2;
    this.score = 0;
    this.cooldown = 0;
  }

  update(keys) {
    if (keys["ArrowUp"]) this.y -= this.speed;
    if (keys["ArrowDown"]) this.y += this.speed;
    if (keys["ArrowLeft"]) this.x -= this.speed;
    if (keys["ArrowRight"]) this.x += this.speed;

    if (keys[" "] && this.cooldown === 0) {
      this.dig();
    }

    if (this.cooldown > 0) this.cooldown--;
  }

  draw(ctx) {
    ctx.fillStyle = "blue";
    ctx.fillRect(this.x, this.y, this.size, this.size);
  }

  dig() {
    const centerX = this.x + this.size / 2;
    const centerY = this.y + this.size / 2;
    const dug = dig(centerX, centerY);

    if (dug) {
      this.score++;
      document.getElementById("score").textContent = this.score;
      this.cooldown = 20;
    }
  }
}
