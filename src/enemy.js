class Enemy {
  constructor(canvas, randomX, speed, direction) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");

    this.size = 45;
    this.x = randomX;
    this.y = 0 - this.size;

    this.direction = direction;

    this.speed = speed;
    //sprites
    this.enemyImg = new Image();
    this.enemyImg.src = "/images/enemysprite.png"
    this.frames = 7;
    this.framesIndex = 0;
  }

  draw(framesCounter) {
    this.ctx.drawImage(
      this.enemyImg,
      0, 
      this.framesIndex * Math.floor(this.enemyImg.height / this.frames),
      this.enemyImg.width,
      Math.floor(this.enemyImg.height / this.frames),
      this.x, 
      this.y,
      
      this.size,
      this.size,
      );
      this.animate(framesCounter);
    /*
    this.ctx.fillstyle = "#66D3FA";
    this.ctx.fillRect(this.x, this.y, this.size, this.size);*/
  }

  animate(framesCounter){
    if(framesCounter % 10 === 0) {
      this.framesIndex++;
      
      if(this.framesIndex > 6) {
        this.framesIndex = 0;
      }
    }
  }

  handleScreenCollision() {
    const screenLeft = 0;
    const screenRight = 600;

    const enemyLeft = this.x;
    const enemyRight = this.x + this.size;

    if(enemyLeft <= screenLeft) this.direction = 1;
    if (enemyRight >= screenRight) this.direction = -1;
  }

  updatePosition() {
    // Restamos la dirección para traer a los enemigos des de fuera del canvas hacia adentro
    this.y += this.speed;
    if (this.direction !== 0) {
      this.x += this.speed * this.direction
    }
    
  }

  isImpacted(bullet) {
    const enemyLeft = this.x;
    const enemyRight = this.x + this.size;
    const enemyTop = this.y;
    const enemyBottom = this.y + this.size;

    const bulletLeft = bullet.x;
    const bulletRight = bullet.x + bullet.size;
    const bulletTop = bullet.y;
    const bulletBottom = bullet.y + bullet.size;

    const crossLeft = bulletRight <= enemyRight && bulletRight >= enemyLeft;
    const crossRight = bulletRight >= enemyLeft && bulletLeft <= enemyRight;
    const crossBottom = bulletBottom >= enemyTop && bulletBottom <= enemyBottom;
    const crossTop = bulletTop <= enemyBottom && bulletTop >= enemyTop;

    if ((crossLeft || crossRight) && (crossTop || crossBottom)) {
      return true;
    } else {
      return false;
    };
  }

  isInsideScreen() {
    
    const enemyTop = this.y;
    const screenBottom = 950;
    const isInside = enemyTop < screenBottom;
    return isInside;
    
  }
}
