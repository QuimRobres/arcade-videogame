class BulletShoot {
    constructor(canvas, positionX, positionY, heroShoot) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");

        this.size = 20;
        this.x = positionX;
        this.y = positionY;

        this.heroShoot = null;
        this.speed = 15;
        
    }

    draw() {
        if (heroShoot = true) {
            this.ctx.fillStyle = "#FF6F27";
        this.ctx.fillRect(this.x, this.y, this.size, this.size);
        } else if (heroShoot === false) {
            this.ctx.fillStyle = "#FF6F50";
        this.ctx.fillRect(this.x, this.y, this.size, this.size);
        }
    }

    updatePosition() {
        if (this.heroShoot === true) {
            this.y -= this.speed;
        } else if (this.heroShoot === false) {
            this.y += this.speed;
        } 
    }
}