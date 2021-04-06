class Bullet {
  constructor(canvas, positionX, positionY, direction) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");

    this.size = 20;
    this.x = positionX;
    this.y = positionY;

    this.direction = direction;
    this.speed = 10;
  }

  draw() {
    if (this.direction === -1) {
      this.ctx.fillStyle = "#FF6F27";
    } else if (this.direction === 1) {
      this.ctx.fillStyle = "#FF6F50";
    }
    this.ctx.fillRect(this.x, this.y, this.size, this.size);
  }

  updatePosition() {
    this.y += this.speed * this.direction;
    
  }

  isInsideScreen() {
    if (this.direction === -1) {
      const bulletBottom = this.y + this.size;
      const screenTop = 0;
      const isInside = bulletBottom > screenTop;
      return isInside;
    } else if (this.direction === 1) {
      const bulletTop = this.y;
      const screenBottom = 900;
      const isInside = bulletTop < screenBottom;
      return isInside;
    }
  }
}
