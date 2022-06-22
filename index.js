//computerPlay
// create function that randomly returns either 'Rock, Paper, or scissors'
function computerPlay() {
     const randomValue = Math.floor(Math.random() * 3);
    if (randomValue == "0") {
        return "Rock";
    }
    else if (randomValue == "1") {
        return "Paper";
    } 
    else {
        return "Scissors";
    }
}


//play single round of RPS

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "Rock" && computerSelection === "Scissors") {
        return "You Win! Rock beats Scissors";
    }
    else if (playerSelection === "Rock" && computerSelection === "Paper") {
        return "You Lose! Paper beats Rock!";
    }
    else if (playerSelection === "Rock" && computerSelection === "Rock") {
        return "Draw!"
    }
}

const playerSelection = "Rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
// create a function 'playerSelection' that will prompt user to choose either 'rock, paper or scissors'
//  playerSelection paramaters should be case-insensitive - user can input rock, ROCK, RocK etc 

//results
// return results of this function call
// NEW function called 'game ()' that keeps score
// Declare winners.

//refer to odin website for more detailed instructions.