class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.speed = 2;
  }

  move(keys) {
    if (keys["ArrowUp"]) this.y -= this.speed;
    if (keys["ArrowDown"]) this.y += this.speed;
    if (keys["ArrowLeft"]) this.x -= this.speed;
    if (keys["ArrowRight"]) this.x += this.speed;
  }

  draw(ctx) {
    ctx.fillStyle = "cyan";
    ctx.fillRect(this.x, this.y, TILE_SIZE, TILE_SIZE);
  }

  dig() {
    dig(this.x + TILE_SIZE / 2, this.y + TILE_SIZE / 2);
  }
}
