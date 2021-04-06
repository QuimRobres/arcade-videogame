let levelOne;
let levelTwo;
let splashScreen;
let levelOneScreen;
let levelTwoScreen
let gameOverLoserScreen;
let gameOverWinnerScreen;

//Function to create HTML elements
function buildDom(htmlString) {
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = htmlString;
  return tempDiv.children[0];
}

//Splashscreen
function createSplashScreen() {
  splashScreen = buildDom(`
    <main class="splash-screen">
        <h1>Project Sueñorl</h1>
        <button>Kill 'em all!!</button>
    </main>
    `);

  document.body.appendChild(splashScreen);

  const startButton = splashScreen.querySelector("button");

  startButton.addEventListener("click", startGame);
}

function removeSplashScreen() {
  splashScreen.remove();
}
//Level One
function createLevelOneScreen() {
  levelOneScreen = buildDom(`
    <main class="level-one-container">
        
        <div class="canvas-container">
            <canvas></canvas>
        </div>

        <div class="health">
                <span class="label"></span>
                <span class="value"></span>
        </div>

        <div class="score">
            <span class="label">Enemies Killed:</span>
            <span class="value"></span>
        </div>
    </main>
    `);

  document.body.appendChild(levelOneScreen);
  return levelOneScreen;
}

function removeLevelOneScreen() {
  levelOneScreen.remove();
}

//LEVEL TWO
//Level One
function createLevelTwoScreen() {
  levelTwoScreen = buildDom(`
    <main class="level-two-container">
        
        <div class="canvas-container">
            <canvas></canvas>
        </div>

        <div class="health">
                <span class="label"></span>
                <span class="value"></span>
        </div>

        <div class="score">
            <span class="label">Enemies Killed:</span>
            <span class="value"></span>
        </div>
    </main>
    `);

  document.body.appendChild(levelTwoScreen);
  return levelTwoScreen;
}

function removeLevelOneScreen() {
  levelOneScreen.remove();
}
//GAME OVER LOSER SCREEN----------------------------------
function createGameOverLoserScreen(score) {
  gameOverLoserScreen = buildDom(`
        <main class="loser-screen">
            <h1>DEFEATED!</h1>
            <p>Your dead count:<span>${score}</span></p>
            <button>Let's kill again!!!</button>
        </main>
    `);
  const button = gameOverLoserScreen.querySelector("button");
  button.addEventListener("click", startGame);

  document.body.appendChild(gameOverLoserScreen);
}

function removeGameOverLoserScreen() {
  gameOverLoserScreen.remove();
}

//GAME OVER WINNER SCREEN -------------------------------
function createGameOverWinnerScreen(score) {
  gameOverWinnerScreen = buildDom(`
        <main class="winner-screen">
            <h1>VICTORY!</h1>
            <p>Your dead count:<span>${score}</span></p>
            <button>Let's do some more killing!!!</button>
        </main>
    `);
  const button = gameOverWinnerScreen.querySelector("button");
  button.addEventListener("click", startGame);
  document.body.appendChild(gameOverWinnerScreen);
}

function removeGameOverWinnerScreen() {
  gameOverWinnerScreen.remove();
}

//START GAME ------------
startGame = () => {
  removeSplashScreen();
  if (gameOverLoserScreen) {
    removeGameOverLoserScreen();
  }
  
  createLevelOneScreen();
  game = new LevelOne(levelOneScreen);
  game.start();
};
//START LEVEL TWO
startLevelTwo = () => {
  removeSplashScreen();
  removeGameOverWinnerScreen();
  createLevelTwoScreen();
  game = new LevelTwo(levelTwoScreen);
  game.start();
}

//END GAME -----------
function endGame(score, victory) {
  if (victory === true) {
    removeLevelOneScreen();
    createGameOverWinnerScreen(score);
  } else {
    removeLevelOneScreen();
    createGameOverLoserScreen(score);
  }
}

//LOADER
window.addEventListener("load", createSplashScreen);