let playerScore = 0
let computerScore = 0

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
    
    //rock
    if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You Win! Rock beats Scissors";
        playerScore++;
    }
    else if (playerSelection === "rock" && computerSelection === "paper") {
        return "You Lose! Paper beats Rock!";
        computerScore++;
    }
    //paper
    if (playerSelection === "paper" && computerSelection === "rock") {
        return "You Win! Paper beats Rock";
        playerScore++;
    }
    else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You Lose! Scissors beats Paper";
       computerScore++;
    }
    //scissors    
    if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You Win! Scissors beats Paper";
        playerScore++;
    }
    else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You Lose! Rock beats Scissors";
        computerScore++;
    }
    //draw
    else if (playerSelection === computerSelection) {
        return "Draw!";
    }
    //Non-viable entry
    else {
        return "Please play the game properly";
    }

    if (playerScore === 5) {
        return "Player wins!";
    }
    if (computerScore === 5) {
        return "Computer wins!";
    }
}

//convert player selection to all lowercase
const playerSelection = prompt("Rock, Paper, or Scissors?").toLowerCase();
const computerSelection = computerPlay();

console.log(playRound(playerSelection, computerSelection));
 
/*
 Write a NEW function called game(). Call the playRound function inside of 
 this one to play a 5 round game that keeps score and reports a winner or 
 loser at the end.
 */
//function game() {
    //for (let i = 0; i < 5; i++) {
        //text += "Round " + i;
    //}

    //if (computerScore === 5 || playerScore === 5) {
        //return "Game over!"
    //}
    

//}

 
 

 // Declare winners.

//refer to odin website for more detailed instructions.