const computerSelectionDisplay = document.getElementById('computer-selection')
const playerSelectionDisplay = document.getElementById('player-selection')
const resultDisplay = document.getElementById('result')
const playerScoreDisplay = document.getElementById('player-score')
const computerScoreDisplay = document.getElementById('computer-score')
const possibleChoices = document.querySelectorAll('button')
let playerSelection
let computerSelection
let result
let playerScore = 0
let computerScore = 0

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    playerSelection = e.target.id
    playerSelectionDisplay.innerHTML = playerSelection
    generateComputerSelection()
    getResult()

}))

function generateComputerSelection() {
    const randomNumber = Math.floor(Math.random() * 3) + 1
    console.log(randomNumber)

    if (randomNumber === 1) {
        computerSelection = 'rock'
    }
    if (randomNumber === 2) {
        computerSelection = 'paper'
    }
    if (randomNumber === 3) {
        computerSelection = 'scissors'
    }
    computerSelectionDisplay.innerHTML = computerSelection
}

function getResult() {
    if (computerSelection === playerSelection) {
        result = 'Draw!'
    }
    if (
       (computerSelection === 'rock' && playerSelection === 'scissors') ||
       (computerSelection === 'paper' && playerSelection === 'rock')  ||
       (computerSelection === 'scissors' && playerSelection === 'paper')
     ) {
        result = 'you lost!'
        computerScore++
    }
    if ( 
       (playerSelection === 'rock' && computerSelection === 'scissors') ||
       (playerSelection === 'paper' && computerSelection === 'rock')  ||
       (playerSelection === 'scissors' && computerSelection === 'paper')
     ) {
        result = 'you won!'
        playerScore++  
    }

    resultDisplay.innerHTML = result
    playerScoreDisplay.innterHTML = playerScore
    computerScoreDisplay.innerHTML = computerScore 
}

