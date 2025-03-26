function getComputerChoice () {
    let number = Math.floor( Math.random() * 3)
    let choice = null
    if (number === 0) {
        choice = "rock"
    } else if (number === 1) {
        choice = "paper"
    } else {
        choice = "scissors"
    }
    return choice
}

function getHumanChoice() {
    return window.prompt("choose an option between rock, paper or scissors")
}

let computerScore = 0
let humanScore = 0