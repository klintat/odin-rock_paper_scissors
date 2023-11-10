let playerScore = 0;
let computerScore = 0;
let roundWinner = '';
const options = ["rock", "paper", "scissors"]

function getComputerChoice() {
    const randIndex = options[Math.floor(Math.random() * options.length)];
    return randIndex;
}

function getPlayerSelection() {
    const randIndexUser = options[Math.floor(Math.random() * options.length)];
    return randIndexUser;
}

function capitalize(word) {
    let capitalized = word.charAt(0).toUpperCase()
    + word.slice(1).toLowerCase();
    return capitalized;
}

function playRound() {
   let playerSelection = getPlayerSelection();
   let computerSelection = getComputerChoice();

   if (playerSelection === options[0] && computerSelection === options[2] || 
    playerSelection === options[1] && computerSelection === options[0] || 
    playerSelection === options[2] && computerSelection === options[1]) {
    console.log(`Round won! ${capitalize(playerSelection)} beats ${computerSelection}!`)
    playerScore++
   } else if (playerSelection === options[0] && computerSelection === options[1] ||
    playerSelection === options[1] && computerSelection === options[2] ||
    playerSelection === options[2] && computerSelection === options[0]) {
    console.log(`Round lost! ${capitalize(computerSelection)} beats ${playerSelection}!`)
    computerScore++
   } else if (playerSelection === computerSelection) {
    console.log("Tie!")
   };
}

function game() {

    for (i = 0; i < 5; i++) {
        playRound();
    }

    if (playerScore > computerScore) {
        console.log("You win!")
    } else if (playerScore < computerScore) {
        console.log("Computer wins!")
    } else {
        console.log("Draw!")
    }
}

game()