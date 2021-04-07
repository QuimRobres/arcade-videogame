class LevelOne {
  constructor(levelOneScreen) {
    this.canvas = null;
    this.ctx = null;
    this.enemies = [];
    this.hero = null;
    this.gameIsOver = false;
    this.victory = false;
    this.levelOneScreen = levelOneScreen;
    this.score = 0;
    this.healthElement = undefined;
    this.scoreElement = undefined;
    this.bulletHero = [];
    this.bulletEnemy = [];
    this.enemyCounter = 0;

    //sprites
    this.framesCounter = 0;
  }

  start() {
    this.healthElement = this.levelOneScreen.querySelector(".health .value");
    this.scoreElement = this.levelOneScreen.querySelector(".score .value");
   
    this.canvas = this.levelOneScreen.querySelector("canvas");
    this.ctx = this.canvas.getContext("2d");
  
    this.canvasContainer = this.levelOneScreen.querySelector(".canvas-container");
    this.containerWidth = 600;
    this.containerHeight = 900;
    this.canvas.setAttribute("width", this.containerWidth);
    this.canvas.setAttribute("height", this.containerHeight);
    
    this.hero = new Hero(this.canvas, 3);
    //CONTROLS---------------
    function handleKeyDown(event) {
      if (event.key === "ArrowLeft") {
        this.hero.setDirection("left");
        console.log("left");
      } else if (event.key === "ArrowRight") {
        this.hero.setDirection("right");
        console.log("right");
      }
      if (event.key === "q") {
        const newBullet = new Bullet(this.canvas, this.hero.x, this.hero.y, -1);
        this.bulletHero.push(newBullet);
        console.log("fire");
      }
    }
    const boundHandleKeyDown = handleKeyDown.bind(this);
    document.body.addEventListener("keydown", boundHandleKeyDown);

    this.startLoop();
  }

  startLoop() {
    const loop = () => {
      //sprites
      this.framesCounter++;
      
      //Spawn enemies-----------
      if (this.enemies.length < 15) {
        if (Math.random() > 0.98) {
          const randomX = Math.floor(Math.random() * this.containerWidth);
          if (randomX < 520) {
            const newEnemy = new Enemy(this.canvas, randomX, 5);
            this.enemies.push(newEnemy);
            this.enemyCounter += 1;
          }
        }
      }

      this.checkCollisions();
      this.checkImpact();

      //POSITION UPDATE AND SCREEN LIMITS
      this.hero.updatePosition();
      this.hero.screenLimits();
      //Hero Shots
      this.bulletHero = this.bulletHero.filter((bullet) => {
        bullet.updatePosition();
        return bullet.isInsideScreen();
      });
      this.bulletEnemy = this.bulletEnemy.filter((bullet) => {
          bullet.updatePosition();
          return bullet.isInsideScreen();
      })
      this.enemies = this.enemies.filter((enemy) => {
        //funcio dispar enemic
        if (Math.random() > 0.99) {
            const newEnemyBullet = new Bullet(this.canvas, enemy.x, enemy.y, 1);
            this.bulletEnemy.push(newEnemyBullet);
        };
        enemy.updatePosition();
        return enemy.isInsideScreen();
      });

      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.hero.draw(this.framesCounter);
      //BULLET DRAW
      this.bulletHero.forEach((bullet) => {
        bullet.draw();
      });

      this.bulletEnemy.forEach((bullet) => {
          bullet.draw();
      })
      //ENEMY DRAW
      this.enemies.forEach((enemy) => {
        enemy.draw(this.framesCounter);
      });

      if (!this.gameIsOver) {
        window.requestAnimationFrame(loop);
      }
      this.updateGameStats();
    };
    loop();
  }
  //CHECK 
  checkImpact() {
    let enem = 0;
    for (let i = 0; i < this.enemies.length; i++) {
      enem = this.enemies[i];
      this.bulletHero.forEach((bullet) => {
        if (enem.isImpacted(bullet)) {
          enem.x = 0 - enem.size;
          bullet.x = 0 - bullet.size;
          //Add Points if enemy killed;
          this.score += 15;
          if (this.score >= 1000) {
            this.victory = true;
            this.gameOver();
            console.log("youwin");
          }
        }
      });
    }
  }
  //COLLISIONS WITH THE ENEMY
  checkCollisions() {
    
    this.bulletEnemy.forEach((bullet) => {
        if (this.hero.bulletImpact(bullet)) {
          console.log("balaenemiga")
          this.hero.removeHealth();

          bullet.x = 0 - bullet.size;
          if (this.hero.health === 0) {
            this.gameOver();
        }
    }
    })

    this.enemies.forEach((enemy) => {
      if (this.hero.isImpacted(enemy)) {
        this.hero.removeHealth();

        enemy.x = 0 - enemy.size;
        if (this.hero.health === 0) {
          this.gameOver();
        }
      }
    });
  }


  gameOver() {
    if (this.victory) {
      endGame(this.score, this.victory);
      this.gameIsOver = true;
    } else {
      this.gameIsOver = true;
      endGame(this.score, this.victory);
    }
  }
  updateGameStats() {
    this.healthElement.innerHTML = this.hero.health;
    this.scoreElement.innerHTML = this.score;
  }
}
