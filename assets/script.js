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
const results = document.querySelector("#results");
const score = document.querySelector("#score");
const finalResult = document.querySelector("#finalresult");

function playRound(computerChoice, humanChoice) {

    humanChoice = humanChoice.toLowerCase()
    finalResult.textContent = "";

    if (computerChoice === "rock" && humanChoice === "rock") {
        //console.log("It's a tie")
        results.textContent = "It's a tie";
    } else if (computerChoice === "rock" && humanChoice === "paper") {
        //console.log("You win! Paper beats Rock")
        results.textContent = "You win! Paper beats Rock";
        humanScore++
    } else if (computerChoice === "rock" && humanChoice === "scissors") {
        //console.log("You lose! Rock beats Scissors")
        results.textContent = "You lose! Rock beats Scissors";
        computerScore++
    } else if (computerChoice === "paper" && humanChoice === "rock") {
        //console.log("You lose! Paper beats Rock")
        results.textContent = "You lose! Paper beats Rock";
        computerScore++
    } else if (computerChoice === "paper" && humanChoice === "paper") {
        //console.log("It's a tie")
        results.textContent = "It's a tie";
    } else if (computerChoice === "paper" && humanChoice === "scissors") {
        //console.log("You win! Scissors beats Paper")
        results.textContent = "ou win! Scissors beats Paper";
        humanScore++
    } else if (computerChoice === "scissors" && humanChoice === "rock") {
        //console.log("You win! Rock beats Scissors")
        results.textContent = "You win! Rock beats Scissors";
        humanScore++
    } else if (computerChoice === "scissors" && humanChoice === "paper") {
        //console.log("You lose! Scissors beats Paper")
        results.textContent = "You lose! Scissors beats Paper";
        computerScore++
    } else if (computerChoice === "scissors" && humanChoice === "scissors") {
        //console.log("It's a tie")
        results.textContent = "It's a tie";
    }

    score.textContent = `Computer Score:${computerScore} | Human Score:${humanScore}`;

    if (humanScore == 5) {
        results.textContent = ""
        finalResult.textContent = "You won the game";
        computerScore = 0;
        humanScore = 0;
    } else if (computerScore == 5) {
        results.textContent = ""
        finalResult.textContent = "You lost the game";
        computerScore = 0;
        humanScore = 0;
    } 

    }

    /*const computerSelection = getComputerChoice();
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
    playRound(computerSelection5, humanSelection5)*/
    const buttons = document.querySelectorAll(".humanSelection");
    
    buttons.forEach(humanSelection);
    function humanSelection (item) {
        item.addEventListener("click", ()=> {
            const computerChoice = getComputerChoice();
            playRound(computerChoice, item.value);
        })
    }

    //console.log("Final Result:")
}

playGame()
  