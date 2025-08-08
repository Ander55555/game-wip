class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = TILE_SIZE;
    this.speed = 2;
    this.score = 0;
    this.cooldown = 0;
  }

  move(keys) {
    if (keys["ArrowUp"]) this.y -= this.speed;
    if (keys["ArrowDown"]) this.y += this.speed;
    if (keys["ArrowLeft"]) this.x -= this.speed;
    if (keys["ArrowRight"]) this.x += this.speed;
  }

  dig() {
    if (this.cooldown > 0) return;
    const dug = dig(this.x + this.size / 2, this.y + this.size / 2);
    if (dug) {
      this.score++;
      document.getElementById("score").textContent = this.score;
      this.cooldown = 20; // frames
    }
  }

  update(keys) {
    this.move(keys);
    if (keys[" "]) this.dig();
    if (this.cooldown > 0) this.cooldown--;
  }

  draw(ctx) {
    ctx.fillStyle = "cyan";
    ctx.beginPath();
    ctx.arc(this.x + this.size / 2, this.y + this.size / 2, this.size / 2, 0, Math.PI * 2);
    ctx.fill();
    ctx.shadowColor = "black";
    ctx.shadowBlur = 10;
  }
}
