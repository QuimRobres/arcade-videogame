class Enemy {
  constructor(canvas, randomX, speed) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");

    this.size = 45;
    this.x = randomX;
    this.y = 0;

    this.speed = speed;
  }

  draw() {
    this.enemyImg = new Image();
    this.enemyImg.src = "/images/enemy.gif"
    this.ctx.drawImage(this.enemyImg, this.x, this.y);
    /*this.ctx.fillStyle = "#FF6F27";
    this.ctx.fillRect(this.x, this.y, this.size, this.size);*/
  }

  updatePosition() {
    // Restamos la dirección para traer a los enemigos des de fuera del canvas hacia adentro
    this.y += this.speed;
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
