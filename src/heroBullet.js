class Bullet {
  constructor(canvas, positionX, positionY, direction) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");

    this.size = 20;
    this.x = positionX;
    this.y = positionY;

    this.direction = direction;
    this.speed = 10;

    //sprites
    this.heroBullet = new Image();
    this.heroBullet.src = "/images/herobulletsprite.png"

    this.enemyBullet = new Image();
    this.enemyBullet.src = "/images/enemybulletsprite.png"
    
    this.frames = 6;
    this.framesIndex = 0;
    //Fire-rate
  }

  draw(framesCounter) {
    if (this.direction === -1) {
      this.ctx.drawImage(
        this.heroBullet,
        0, 
        this.framesIndex * Math.floor(this.heroBullet.height / this.frames),
        this.heroBullet.width,
        Math.floor(this.heroBullet.height / this.frames),
        this.x + this.size/2, 
        this.y,
        
        this.size,
        this.size,
        );
        this.animate(framesCounter);
    } else if (this.direction === 1) {
      this.ctx.drawImage(
        this.enemyBullet,
        0, 
        this.framesIndex * Math.floor(this.enemyBullet.height / this.frames),
        this.enemyBullet.width,
        Math.floor(this.enemyBullet.height / this.frames),
        this.x, 
        this.y + 5,
        
        this.size,
        this.size,
        );
        this.animate(framesCounter);
    }
  
  }

  animate(framesCounter){
    if(framesCounter % 10 === 0) {
      this.framesIndex++;
      
      if(this.framesIndex > 5) {
        this.framesIndex = 0;
      }
    }
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
