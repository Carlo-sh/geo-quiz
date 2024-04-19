import "./style.css";
import countries from "../node_modules/world_countries_lists/data/countries/en/world.json";

const flagBtn = document.getElementById("flag-mode");
const centralDiv = document.getElementById("btn-container");
let playerLives = 3;
let playerScore = 0;

// CREATE FLAGS GRID
const generateFlagGrid = () => {
  centralDiv.classList.add("flags-container");
  centralDiv.innerHTML = '<h2 id="guess-title">guess the flag</h2>';

  const roundCountries = roundFlags(); // GET AN ARRAY OF 4 COUNTRIES NAMES

  const flagsDiv = document.createElement("div");
  flagsDiv.setAttribute("id", "round-flags");

  const guessFlag = document.createElement("h2");
  guessFlag.setAttribute("id", "guess-flag");
  // SET A RANDOM COUNTRY TO GUESS
  guessFlag.textContent = `${
    roundCountries[Math.floor(Math.random() * roundCountries.length)]
  }`;
  const guessName = guessFlag.textContent;

  // ADD FLAG IMAGES
  roundCountries.forEach(c => {
    const flagImg = new Image();
    const flagIndex = countries.findIndex(f => f.name === c);
    flagImg.src = `../node_modules/world_countries_lists/data/flags/128x128/${countries[flagIndex].alpha2}.png`;
    flagImg.setAttribute("name", `${countries[flagIndex].name}`);
    flagsDiv.appendChild(flagImg);
  });

  // ADD TIME BAR
  const timeBarContainer = document.createElement("div");
  timeBarContainer.classList.add("time-bar");
  timeBarContainer.innerHTML = '<div id="inner-bar"></div>';

  centralDiv.append(flagsDiv, timeBarContainer, guessFlag);
  generateScoreGrid();

  const rightAudio = new Audio(
    "../src/sounds/264981__renatalmar__sfx-magic.wav"
  );
  const wrongAudio = new Audio(
    "../src/sounds/587253__beetlemuse__dats-wrong.wav"
  );

  const gridFlags = document.querySelectorAll("#round-flags img");
  // ADD EVENT LISTENERS TO FLAGS
  gridFlags.forEach(f => {
    f.addEventListener("click", () => {
      gridFlags.forEach(g => {
        g.style.pointerEvents = "none";
      });

      if (f.name === guessName) {
        rightAudio.play();
        f.style.backgroundColor = "green";
        playerScore++;

        const bar = document.querySelector("#inner-bar");
        bar.style.animationPlayState = "paused";
        countries.splice(
          countries.findIndex(c => c.name === f.name),
          1
        );
        if (countries.length < 4) {
          endGame();
          populateHighscore(playerScore);
          return;
        }
        generateScoreGrid();
        setTimeout(generateFlagGrid, 800);
      } else {
        wrongAudio.play();
        f.style.backgroundColor = "red";
        playerLives--;
        if (checkLives(playerLives)) {
          populateHighscore(playerScore);
          return;
        }

        generateScoreGrid();
        setTimeout(generateFlagGrid, 800);
      }
    });
  });
  // SET TIMER BAR
  const innerBar = document.getElementById("inner-bar");
  innerBar.addEventListener("animationend", () => {
    wrongAudio.play();
    playerLives--;
    gridFlags.forEach(f => {
      f.style.pointerEvents = "none";
      f.style.backgroundColor = "red";
    });
    if (checkLives(playerLives)) return;
    setTimeout(generateFlagGrid, 800);
  });
};
// SET FLAGS FOR A SINGLE ROUND
const roundFlags = () => {
  const countriesArr = [];
  while (countriesArr.length < 4) {
    const countryIndex = Math.floor(Math.random() * countries.length);
    if (!countriesArr.includes(countries[countryIndex].name)) {
      countriesArr.push(countries[countryIndex].name);
    }
  }
  return countriesArr;
};

flagBtn.addEventListener("click", () => {
  highscoreGrid();
  populateHighscore(playerScore);
  generateFlagGrid();
});

// SET SCORE CONTAINER
const generateScoreGrid = () => {
  if (centralDiv.lastElementChild.id === "score-container") {
    centralDiv.lastElementChild.innerHTML = "";
  }
  const scoreDiv = document.createElement("div");
  scoreDiv.setAttribute("id", "score-container");

  const livesContainer = document.createElement("div");
  livesContainer.setAttribute("id", "lives-container");

  const lives = document.createElement("h2");
  lives.setAttribute("id", "lives");
  lives.textContent = "Lives: ";

  const livesWrapper = document.createElement("div");
  livesWrapper.setAttribute("id", "lives-wrapper");
  for (let i = 0; i < playerLives; i++) {
    const life = new Image();
    life.src = "../src/images/globe-2-svgrepo-com.svg";
    livesWrapper.appendChild(life);
  }

  livesContainer.append(lives, livesWrapper);

  const score = document.createElement("h2");
  score.setAttribute("id", "score");
  score.textContent = `Score: ${playerScore}`;

  scoreDiv.append(livesContainer, score);

  centralDiv.appendChild(scoreDiv);
};

const checkLives = lives => {
  if (lives === 0) {
    setTimeout(endGame, 800);
    return true;
  }
  return false;
};
// SET MESSAGE AT THE END OF THE GAME
const endGame = () => {
  centralDiv.innerHTML = "";

  const guessTitle = document.createElement("h2");
  guessTitle.setAttribute("id", "guess-title");
  guessTitle.textContent = "guess the flag";

  const gameOver = document.createElement("h2");
  gameOver.setAttribute("id", "game-over");

  if (playerLives) {
    const endgameAudio = new Audio(
      "../src/sounds/607407__colorscrimsontears__fanfare-3-rpg.wav"
    );
    gameOver.textContent = `You complete the game! (score: ${playerScore})`;
    endgameAudio.play();
  } else {
    const gameoverAudio = new Audio(
      "../src/sounds/619832__cogfirestudios__puzzle-game-victory-melody.wav"
    );
    gameOver.textContent = `Game Over! Your final score is ${playerScore}`;
    gameoverAudio.play();
  }

  centralDiv.append(guessTitle, gameOver);
};

// SET HIGHSCORE GRID
const highscoreGrid = () => {
  const highscoreDiv = document.createElement("div");
  highscoreDiv.setAttribute("id", "highscore-container");

  const highscoreList = document.createElement("div");

  highscoreDiv.append(highscoreList);
  document.body.appendChild(highscoreDiv);
  return highscoreDiv;
};

// SAVE HIGHSCORES
const populateHighscore = result => {
  const highdiv = document.getElementById("highscore-container");
  highdiv.innerHTML = '<h1 id="highscore-title">Highscore</h1>';
  const dateStr = new Date().toString().slice(4, 25);

  if (localStorage["highscoreItem"]) {
    const highs = JSON.parse(localStorage.getItem("highscoreItem"));
    if (playerScore) {
      highs.push([dateStr, playerScore]);
    }
    highs.sort((a, b) => b[1] - a[1]);
    highs.forEach(h => {
      const iscore = document.createElement("h3");
      iscore.textContent = `${highs.indexOf(h) + 1} - ${h[0]} --> ${h[1]}`;
      highdiv.appendChild(iscore);
    });
    localStorage.setItem("highscoreItem", JSON.stringify(highs));
  } else {
    const highscores = [];
    if (!playerScore) return;
    highscores.push([dateStr, result]);
    highscores.sort((a, b) => b[1] - a[1]);
    highscores.forEach(h => {
      const iscore = document.createElement("h3");
      iscore.textContent = `1 - ${h[0]} --> ${h[1]}`;
      highdiv.appendChild(iscore);
    });
    localStorage.setItem("highscoreItem", JSON.stringify(highscores));
  }
};
