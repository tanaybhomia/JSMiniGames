// generate a random number & show it on the box
function randomgen() {
  return Math.trunc(Math.random() * 20) + 1;
}

// creating a Initial score
let score = 20;
let secretnum = randomgen();
let highscore = 0;

function show() {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);

  if (!guess) {
    document.querySelector(".message").textContent = "🚫 No Number";
  } else if (guess === secretnum) {
    document.querySelector(".message").textContent = "🥳 Correct Number!";

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secretnum;
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

    // When the player wins
  } else if (guess > secretnum) {
    if (score > 1) {
      document.querySelector(".message").textContent = "☝🏻 Too High !";
      score = score - 1;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "🤣 You Lost !";
      document.querySelector(".score").textContent = 0;
    }
    // When the guess in higher
  } else if (guess < secretnum) {
    if (score > 1) {
      document.querySelector(".message").textContent = "👇🏻 too Low !";
      score = score - 1;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "🤣 You Lost!";
      document.querySelector(".score").textContent = 0;
    }
    // When the guess in lower
  }
}
function reset() {
  secretnum = randomgen();
  score = 20;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector("body").style.backgroundColor = "#282828";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
}

// Running the function on click
document.querySelector(".check").addEventListener("click", show);
document.querySelector(".again").addEventListener("click", reset);
