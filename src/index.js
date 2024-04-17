import "./style.css";
import countries from "../node_modules/world_countries_lists/data/countries/en/world.json";

const flagBtn = document.getElementById("flag-mode");
const centralDiv = document.getElementById("btn-container");
let playerLives = 3;
let playerScore = 0;

const generateFlagGrid = () => {
  console.log(countries);
  centralDiv.classList.add("flags-container");
  centralDiv.innerHTML = '<h2 id="guess-title">guess the flag</h2>';

  const roundCountries = roundFlags();

  const flagsDiv = document.createElement("div");
  flagsDiv.setAttribute("id", "round-flags");

  const guessFlag = document.createElement("h2");
  guessFlag.setAttribute("id", "guess-flag");
  guessFlag.textContent = `${
    roundCountries[Math.floor(Math.random() * roundCountries.length)]
  }`;
  const guessName = guessFlag.textContent;

  roundCountries.forEach(c => {
    const flagImg = new Image();
    const flagIndex = countries.findIndex(f => f.name === c);
    flagImg.src = `../node_modules/world_countries_lists/data/flags/128x128/${countries[flagIndex].alpha2}.png`;
    flagImg.setAttribute("name", `${countries[flagIndex].name}`);
    flagsDiv.appendChild(flagImg);
  });

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

        generateScoreGrid();
        setTimeout(generateFlagGrid, 800);
      } else {
        wrongAudio.play();
        f.style.backgroundColor = "red";
        playerLives--;
        if (checkLives(playerLives)) return;
        generateScoreGrid();
        setTimeout(generateFlagGrid, 800);
      }
    });
  });

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
  generateFlagGrid();
});

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
    setTimeout(() => {
      centralDiv.innerHTML = "";
      const guessTitle = document.createElement("h2");
      guessTitle.setAttribute("id", "guess-title");
      guessTitle.textContent = "guess the flag";
      const gameOver = document.createElement("h2");
      gameOver.textContent = `Game Over! Your final score is ${playerScore}`;

      centralDiv.append(guessTitle, gameOver);
    }, 800);
    return true;
  }
  return false;
};
