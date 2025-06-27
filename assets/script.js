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
            results.textContent = "It's a tie";
        } else if (computerChoice === "rock" && humanChoice === "paper") {
            results.textContent = "You win! Paper beats Rock";
            humanScore++
        } else if (computerChoice === "rock" && humanChoice === "scissors") {
            results.textContent = "You lose! Rock beats Scissors";
            computerScore++
        } else if (computerChoice === "paper" && humanChoice === "rock") {
            results.textContent = "You lose! Paper beats Rock";
            computerScore++
        } else if (computerChoice === "paper" && humanChoice === "paper") {
            results.textContent = "It's a tie";
        } else if (computerChoice === "paper" && humanChoice === "scissors") {
            results.textContent = "ou win! Scissors beats Paper";
            humanScore++
        } else if (computerChoice === "scissors" && humanChoice === "rock") {
            results.textContent = "You win! Rock beats Scissors";
            humanScore++
        } else if (computerChoice === "scissors" && humanChoice === "paper") {
            results.textContent = "You lose! Scissors beats Paper";
            computerScore++
        } else if (computerChoice === "scissors" && humanChoice === "scissors") {
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

    const buttons = document.querySelectorAll(".humanSelection");
    
    buttons.forEach(humanSelection);

    function humanSelection (item) {
        item.addEventListener("click", ()=> {
            const computerChoice = getComputerChoice();
            playRound(computerChoice, item.value);
        })
    }
}

playGame()
  