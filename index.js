const computerSelectionDisplay = document.getElementById('computer-selection')
const playerSelectionDisplay = document.getElementById('player-selection')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let playerSelection
let computerSelection
let result

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
    if (computerSelection === 'rock' && playerSelection === 'scissors') {
        result = 'you lost!'
    }
    if (computerSelection === 'rock' && playerSelection === 'paper') {
        result = 'you won!'
    }
    if (computerSelection === 'paper' && playerSelection === 'rock') {
        result = 'you lost!'
    }
    if (computerSelection === 'paper' && playerSelection === 'scissors') {
        result = 'you won!'
    }
    if (computerSelection === 'scissors' && playerSelection === 'paper') {
        result = 'you lost!'
    }
    if (computerSelection === 'scissors' && playerSelection === 'rock') {
        result = 'you won!'
    }

    resultDisplay.innerHTML = result
}