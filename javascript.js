function getComputerChoice() {
    const options = ["rock", "paper", "scissors"];
    const randIndex = Math.floor(Math.random() * options.length); // options([Math.floor(Math.random() * options.length)])
    console.log(options[randIndex]);
}

getComputerChoice()

function playRound(playerSelection, computerSelection) {
    
}

const playersSelection = "rock";
const computerSelection = getComputerChoice();

