class Bullet {
  constructor(canvas, positionX, positionY, direction) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");

    this.size = 20;
    this.x = positionX;
    this.y = positionY;

    this.direction = 0;
    this.speed = 15;
    
}

draw() {
    if (this.direction === -1) {
        this.ctx.fillStyle = "#FF6F27";
    this.ctx.fillRect(this.x, this.y, this.size, this.size);
    } else if (this.direction === 1) {
        this.ctx.fillStyle = "#FF6F50";
    this.ctx.fillRect(this.x, this.y, this.size, this.size);
    }
}

updatePosition() {
    if (this.direction === -1) {
        this.y -= this.speed * this.direction;
    } else if (this.direction === 1) {
        this.y += this.speed * this.direction;
    } 
}
}