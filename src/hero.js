class Hero {
  constructor(canvas, health) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");

    this.health = health;

    this.size = 50;

    this.x = 300 - this.size;
    this.y = 900 - this.size - 5;

    this.direction = 0;
    this.speed = 30;
    //sprites
    this.heroImg = new Image();
    this.heroImg.src = "/images/herosprite.png";
    this.frames = 12;
    this.framesIndex = 0;

    
  }

  setDirection(direction) {
    if (direction === "left") {
      this.direction = -1;
    } else if (direction === "right") {
      this.direction = 1;
    }
  }

  screenLimits() {
    const screenLeft = 0;
    const screenRigth = this.canvas.width;

    const heroLeft = this.x;
    const heroRigth = this.x + this.size;

    if (heroLeft <= screenLeft) this.x += this.speed;
    else if (heroRigth >= screenRigth) this.x -= this.speed;
  }

  updatePosition() {
    this.x += this.direction * this.speed;
    this.direction = 0;
  }

  removeHealth() {
    this.health -= 1;
  }

  draw(framesCounter) {
    this.ctx.drawImage(
      this.heroImg,
      0, 
      this.framesIndex * Math.floor(this.heroImg.height / this.frames),
      this.heroImg.width,
      Math.floor(this.heroImg.height / this.frames),
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
      
      if(this.framesIndex > 11) {
        this.framesIndex = 0;
      }
    }
  }

  //collision with enemy;
  isImpacted(enemy) {
    const heroLeft = this.x;
    const heroRight = this.x + this.size;
    const heroTop = this.y;
    const heroBottom = this.y + this.size;

    const enemyLeft = enemy.x;
    const enemyRight = enemy.x + enemy.size;
    const enemyTop = enemy.y;
    const enemyBottom = enemy.y + enemy.size;


    const crossLeft = enemyLeft <= heroRight && enemyLeft >= heroLeft;
    const crossRight = enemyRight >= heroLeft && enemyRight <= heroRight;
    const crossBottom = enemyBottom >= heroTop && enemyBottom <= heroBottom;
    const crossTop = enemyTop <= heroBottom && enemyTop >= heroTop;

    if ((crossLeft || crossRight) && (crossTop || crossBottom)) {
      return true;
    } else {
      return false;
    }
  }

  bulletImpact(bullet) {
    const heroLeft = this.x;
    const heroRight = this.x + this.size;
    const heroTop = this.y;
    const heroBottom = this.y + this.size;

    const bulletLeft = bullet.x;
    const bulletRight = bullet.x + bullet.size;
    const bulletTop = bullet.y;
    const bulletBottom = bullet.y + bullet.size;


    const crossLeft = bulletLeft <= heroRight && bulletLeft >= heroLeft;
    const crossRight = bulletRight >= heroLeft && bulletRight <= heroRight;
    const crossBottom = bulletBottom >= heroTop && bulletBottom <= heroBottom;
    const crossTop = bulletTop <= heroBottom && bulletTop >= heroTop;

    if ((crossLeft || crossRight) && (crossTop || crossBottom)) {
      return true;
    } else {
      return false;
    }
  }
}
