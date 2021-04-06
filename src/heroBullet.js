class Bullet {
    constructor(canvas, positionX, positionY) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");
    
        this.size = 20;
        this.x = positionX;
        this.y = positionY;
    
        this.speed = 15;
      }
    
      draw() {
        this.ctx.fillStyle = "#FF6F27";
        this.ctx.fillRect(this.x, this.y, this.size, this.size);
      }
    
      updatePosition() {
        this.y -= this.speed;
      }
    
      isInsideScreen() {
        const bulletBottom = this.y + this.size;
        const screenTop = 0;
        const isInside = bulletBottom > screenTop;
        return isInside;
        
      }
    }
    