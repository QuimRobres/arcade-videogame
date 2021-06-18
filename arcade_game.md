# README

## Description



Arcade Game it's an arcade-80' like shooter, where the Player must kill all the enemies to pass to the next level, while they attack him. Enemies will be killed when impacted by a bullet. If the Player is impacted for enemies or enemy bullets 3 times, you lose the game.



## MVP

The player can move left or right while shooting enemies. For each enemy, the score will increase until you have enough points to pass to the next level. The enemies will spawn randomly on the top of the screen and shoot randomly. In the second level, enemies will have a different movement.



## Backlog

- Add a Boss.
- Add power-ups.
- Background with movement.
- OST.



## Data Structure

#### main.js

```javascript
createSplashScreen() {    
}

createLevelOneScreen(){
}

createLevelTwoScreen(){
}

createGameOverLoserScreen(){
}

createGameOverWinnerScreen(){
}

createFinalVictoryScreen(){
}

startGame(){
}

startLevelTwo(){
}

endGame(){
}
```

#### levelOne.js and levelTwo.js

```javascript
class LevelOne (){
    constructor(/*levelOneScreen or levelTwoScreen*/){     
    }
    start(){
        
        function handleKeyDown (){
            if(event.key === "ArrowLeft") //move left
            else if (event.key === "ArrowRigth") //move right
            if(event.key === "q") //FIRE!
        }
    }
    
    startLoop(){
    
        this.checkColissions();

        this.checkImpact();

        this.heroUpdatePosition(){}

        this.screenLimits(){}
        
        this.enemies.filter(){
            spawnEnemy
            this.handleScreenLimits(){}
        }
        
        this.ctx.clear(){}
    }
    loop();
}

gameOver()
updateGameStats()
```

#### hero.js

```javascript
class Hero {
    constructor(canvas, lives) {
        this.canvas;
        this.x;
        this.y;
        this.health;
        this.size;
        this.drection;
        this.speed;
        this.heroImg;
        this.heroImg.src;
        this.frames;
        this.framesIndex;
    }
    
	setDirection();
    screenLimits();
    updatePosition();
    removeHealth();
    draw();
    animate();
    isImpacted();
    bulletImpact();
}
```

#### enemy.js

```javascript
class Enemy (){
    this.canvas;
    this.x;
    this.y;
    this.size;
    this.direction;
    this.speed;
    this.enemyImg;
    this.enemyImg.src;
    this.frames;
    this.framesIndex;
    
    draw();
    animate();
    handleScreenCollision();
    updatePosition();
    isImpacted();
    isInsideScreen();    
    
}
```



### Tasks

- Main - Build Splash Screen.

- Main - Build GameOverLoserScreen.

- Main - Build LevelOne. 

- LevelOne - buildCanvas.

- LevelOne- clearCanvas.

- Create Player movement.

- Create enemy spawn and movement.

- Create bullets spawn and movement.

- LevelOne - Add Player.

- LevelOne - Add enemy.

- LevelTwo - add bullets.

- LevelOne - updateCanvas.

- LevelOne - setGameOver

- LevelOne - setCollisions.

- LevelOne - UpdateGameStats.

- Add levelTwo extended from levelOne.

- Create new movement side to side to enemies.

- Implement new movement only in levelTwo.

- Add bullet sounds.

  -------------------------------------------

  

# Links

### Trello

https://trello.com/b/KnLP3bmr/arcade-game



## Git



https://github.com/QuimRobres/arcade-videogame

https://quimrobres.github.io/arcade-videogame/

