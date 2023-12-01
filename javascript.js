let playerScore = 0;
let computerScore = 0;
let roundWinner = '';
const options = ["fire", "earth", "water"]

function getComputerChoice() {
    const randIndex = options[Math.floor(Math.random() * options.length)];
    return randIndex;
}

let = btnFire = document.querySelector("#btn-fire");
let = btnEarth = document.querySelector("#btn-earth");
let = btnWater = document.querySelector("#btn-water");

btnRock.addEventListener('click',function() {
    alert("Fire!")
});

btnPaper.addEventListener('click',function() {
    alert("Earth!")
});

btnScissors.addEventListener('click',function() {
    alert("Water!")
});

// function getPlayerSelection() {
//     let = btnRock = document.querySelector("#btn-rock");
//     let = btnPaper = document.querySelector("#btn-paper");
//     let = btnScissors = document.querySelector("#btn-scissors");

//     btnRock.addEventListener('click',function() {
//         alert("Rock!")
//     });

//     btnPaper.addEventListener('click',function() {
//         alert("Paper!")
//     });

//     btnScissors.addEventListener('click',function() {
//         alert("Scissors!")
//     });
// }

function capitalize(word) {
    let capitalized = word.charAt(0).toUpperCase()
    + word.slice(1).toLowerCase();
    return capitalized;
}

function playRound() {
//    let playerSelection = getPlayerSelection();
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

// function game() {

//     for (i = 0; i < 5; i++) {
//         playRound();
//     }

//     if (playerScore > computerScore) {
//         console.log("You win!")
//     } else if (playerScore < computerScore) {
//         console.log("Computer wins!")
//     } else {
//         console.log("Draw!")
//     }
// }

// game()