//computerPlay
// create function that randomly returns either 'Rock, Paper, or scissors'
function computerPlay() {
     const randomValue = Math.floor(Math.random() * 3);
    if (randomValue == "0") {
        return "rock";
    }
    else if (randomValue == "1") {
        return "paper";
    } 
    else {
        return "scissors";
    }
}


//play single round of RPS

function playRound(playerSelection, computerSelection) {
    //convert player selection to all lowercase

    if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You Win! Rock beats Scissors";
    }
    else if (playerSelection === "rock" && computerSelection === "paper") {
        return "You Lose! Paper beats Rock!";
    }
    else if (playerSelection === "rock" && computerSelection === "rock") {
        return "Draw!"
    }
}
//Maybe turn this into an array ^??

const playerSelection = prompt("Rock, Paper, or Scissors?").toLowerCase();
const computerSelection = computerPlay();

console.log(playRound(playerSelection, computerSelection));
// create a function 'playerSelection' that will prompt user to choose either 'rock, paper or scissors'
//  playerSelection paramaters should be case-insensitive - user can input rock, ROCK, RocK etc 

//results
// return results of this function call
// NEW function called 'game ()' that keeps score
// Declare winners.

//refer to odin website for more detailed instructions.