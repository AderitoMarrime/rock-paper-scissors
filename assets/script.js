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

  function playGame () {
    let computerScore = 0
    let humanScore = 0

    function playRound(computerChoice, humanChoice) {

        humanChoice = humanChoice.toLowerCase()

        if (computerChoice === "rock" && humanChoice === "rock") {
            console.log("It's a tie")
        } else if (computerChoice === "rock" && humanChoice === "paper") {
            console.log("You win! Paper beats Rock")
            humanScore++
        } else if (computerChoice === "rock" && humanChoice === "scissors") {
            console.log("You lose! Rock beats Scissors")
            computerScore++
        } else if (computerChoice === "paper" && humanChoice === "rock") {
            console.log("You lose! Paper beats Rock")
            computerScore++
        } else if (computerChoice === "paper" && humanChoice === "paper") {
            console.log("It's a tie")
        } else if (computerChoice === "paper" && humanChoice === "scissors") {
            console.log("You win! Scissors beats Paper")
            humanScore++
        } else if (computerChoice === "scissors" && humanChoice === "rock") {
            console.log("You win! Rock beats Scissors")
            humanScore++
        } else if (computerChoice === "scissors" && humanChoice === "paper") {
            console.log("You lose! Scissors beats Paper")
            computerScore++
        } else if (computerChoice === "scissors" && humanChoice === "scissors") {
            console.log("It's a tie")
        }

        console.log(`Computer Score:${computerScore} | Human Score:${humanScore}`)
    }

    const computerSelection = getComputerChoice();
    const humanSelection = getHumanChoice();
    playRound(computerSelection, humanSelection)
    
    const computerSelection2 = getComputerChoice();
    const humanSelection2 = getHumanChoice();
    playRound(computerSelection2, humanSelection2)

    const computerSelection3 = getComputerChoice();
    const humanSelection3 = getHumanChoice();
    playRound(computerSelection3, humanSelection3)

    const computerSelection4 = getComputerChoice();
    const humanSelection4 = getHumanChoice();
    playRound(computerSelection4, humanSelection4)

    const computerSelection5 = getComputerChoice();
    const humanSelection5 = getHumanChoice();
    playRound(computerSelection5, humanSelection5)

    console.log("Final Result:")
    if (humanScore > computerScore) {
        console.log("You won!")
    } else if (computerScore > humanScore) {
        console.log("You loss!")
    } else {
        console.log("It's a tie!")
    }
}

playGame()
  