//computerPlay
// create function that randomly returns either 'Rock, Paper, or scissors'
function computerPlay() {
    randomValue = Math.floor(Math.random() * 3);
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

console.log(computerPlay());


//playerSelection
// create a function 'playerSelection' that will prompt user to choose either 'rock, paper or scissors'
//  playerSelection paramaters should be case-insensitive - user can input rock, ROCK, RocK etc 

//results
// return results of this function call
// NEW function called 'game ()' that keeps score
// Declare winners.

//refer to odin website for more detailed instructions.