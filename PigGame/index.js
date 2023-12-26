"use strict";

// declaring variables
let dice = 0;
let currentscore = 0;
let activeplayer = 0;
const scores = [0, 0];

// Selecting elements
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");
const diceEL = document.querySelector(".dice");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");

// initializing starting scores
score0El.textContent = 0;
score1El.textContent = 0;

diceEL.classList.add("hidden");

// adding event handlers to buttons
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
btnNew.addEventListener("click", newgame);
btnRoll.addEventListener("click", generateroll);
btnHold.addEventListener("click", hold);

// function to generate random dice number
function generateroll() {
  // Generate a random dice number
  dice = Math.trunc(Math.random() * 6) + 1;

  // Display the dice
  diceEL.classList.remove("hidden");
  diceEL.src = `dice-${dice}.png`;
  console.log(dice);

  // Switching the player
  if (dice != 1) {
    // Add dice to the current score
    currentscore += dice;
    document.getElementById(`current--${activeplayer}`).textContent =
      currentscore;
  } else {
    // Changing the score of the previous player to 0
    switchPlayer();
  }
}

function hold() {
  // Add the score to array
  scores[activeplayer] += currentscore;
  document.getElementById(`score--${activeplayer}`).textContent =
    scores[activeplayer];
  // Check if the player is >=100
  if (scores[activeplayer] >= 100) {
    // Removing the dice
    diceEL.classList.add("hidden");

    // Changing background color and buttons
    document
      .querySelector(`.player--${activeplayer}`)
      .classList.add("player--winner");
    document
      .querySelector(`.btn--${activeplayer}`)
      .classList.add("btn--winner");
    document
      .querySelector(`.btn--${activeplayer}`)
      .classList.add("btn--winner");
    document
      .querySelector(`.btn--${activeplayer}`)
      .classList.add("btn--winner");
    document
      .querySelector(`.btn--${activeplayer}`)
      .classList.add("btn--winner");
    document
      .querySelector(`.btn--${activeplayer}`)
      .classList.add("btn--winner");
    document
      .querySelector(`.btn--${activeplayer}`)
      .classList.add("btn--winner");

    // Final changes after the player wins
    // resetting the scores
    score0El.textContent = 0;
    score1El.textContent = 0;

    // resetting the current scores
    current0El.textContent = 0;
    current1El.textContent = 0;

    // resetting the dice
    diceEL.classList.add("hidden");

    // resetting the current score
    currentscore = 0;

    // resetting the active player
    activeplayer = 0;

    // changing the class of the active player
    player0El.classList.ad("player--active");
  } else {
    // Switch to the Next Player
    switchPlayer();
  }
}
function newgame() {
  // resetting the scores
  score0El.textContent = 0;
  score1El.textContent = 0;

  // resetting the current scores
  current0El.textContent = 0;
  current1El.textContent = 0;

  // resetting the dice
  diceEL.classList.add("hidden");

  // resetting the current score
  currentscore = 0;

  // resetting the active player
  activeplayer = 0;

  // changing the class of the active player
  player0El.classList.ad("player--active");
}
function switchPlayer() {
  document.getElementById(`current--${activeplayer}`).textContent = 0;
  currentscore = 0;
  activeplayer = activeplayer === 0 ? 1 : 0;
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
}
