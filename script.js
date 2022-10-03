"use strict";

// DOM
const buttons = document.querySelectorAll(`.btn`);
const playerChoice = document.querySelector(`#player-selection`);
const computerChoice = document.querySelector(`#computer-selection`);

//Score variables
let round = 0;
let playerScore = 0;
let computerScore = 0;
let playerSelection;
let computerSelection;

//Random computer selection
const getComputerChoice = function () {
  const randomNumber = Math.floor(Math.random() * 3);

  if (randomNumber === 1) {
    return `rock`;
  } else if (randomNumber === 2) {
    return `paper`;
  } else {
    return `scissors`;
  }
};

// playing round of RPS
const playerRound = function (playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return `Draw!, you both picked ${playerSelection}`;
  } else if (
    (playerSelection === `rock` && computerSelection === `scissors`) ||
    (playerSelection === `paper` && computerSelection === `rock`) ||
    (playerSelection === `scissors` && computerSelection === `paper`)
  ) {
    return `You win!, ${playerSelection} beats ${computerSelection}`;
    playerScore++;
  } else {
    return `You Lose!, ${computerSelection} beats ${playerSelection}`;
    computerScore++;
  }
};
// for (let i = 0; i < buttons.length; i++) {
//   buttons[i].addEventListener(`click`, playerRound);
// }

// Clicking button - player choice.
buttons.forEach((btn) => {
  btn.addEventListener(`click`, () => {
    playerSelection = btn.textContent;
    computerSelection = getComputerChoice();
    playerRound(playerSelection, computerSelection);
    console.log(playerRound(playerSelection, computerSelection));
    // if (playerScore === 5 || computerScore === 5) {
    //   declareWinner();
    // }
  });
});

// document.querySelector(`.btn`).addEventListener(`click`, function () {
//   playerRound();
// });

// console.log(computerSelection);
// console.log(playerRound(playerSelection, computerSelection));

// 5 round game and score
// const game = function () {
//   round = 0;
//   //   playerRound(playerSelection, computerSelection);
//   for (let i = 0; i < 5; i++) {
//     // round += round;
//     // computerSelection;
//     playerRound(playerSelection, computerSelection);
//     // playerSelection = prompt(`Please choose, rock, paper, or scissors`);
//     round++;
//     console.log(playerRound(playerSelection, computerSelection));
//     console.log(round);
//     // playerRound();
//     // round++;
//   }
// };
// let gameResult = game();
// console.log(gameResult);
