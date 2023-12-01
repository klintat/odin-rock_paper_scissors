// Games logic
const game = () => {
    let playerScore = 0;
    let computerScore = 0;
    let moves = 0;
    

    // Function to play game (doing DOM manipulation to get hold of buttons and create options for player and computer)
    const playGame = () => {
        const btnFire = document.querySelector("#btn-fire");
        const btnEarth = document.querySelector("#btn-earth");
        const btnWater = document.querySelector("#btn-water");
        const playerOptions = [btnFire, btnEarth, btnWater];
        const computerOptions = ["fire", "earth", "water"];

        // Function to start the game
        playerOptions.forEach(option => {
            option.addEventListener("click", function(){
                const movesLeft = document.querySelector(".movesLeft");
                moves++;
                movesLeft.innerText = `Moves left: ${10-moves}`;

                const computerChoice = computerOptions[Math.floor(Math.random() * computerOptions.length)];

                // Function to check who wins
                winner(this.innerText, computerChoice)

                // Calling gameOver function after 10 moves
                if(moves == 10) {
                    gameOver(playerOptions, movesLeft);
                }
            })
        })
    }

    // Function to decide winner
    const winner = (player,computer) => {
        const result = document.querySelector(".result");
        const playerScoreBoard = document.querySelector(".player-count");
        const computerScoreBoard = document.querySelector(".computer-count");
        player = player.toLowerCase();
        computer = computer.toLowerCase();
        if (player === computer) {
            result.textContent = "Tie"
        } else if (player == "🔥") {
            if (computer == "water"){
                result.textContent = "Computer Won";
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            } else {
                result.textContent = "Player Won"
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
        else if(player == "🌱"){ 
            if(computer == "fire"){ 
                result.textContent = "Computer Won"; 
                computerScore++; 
                computerScoreBoard.textContent = computerScore; 
            }else{ 
                result.textContent = "Player Won"; 
                playerScore++; 
                playerScoreBoard.textContent = playerScore; 
            } 
        }
        else if(player == "💧"){ 
            if(computer == "earth"){ 
                result.textContent = "Computer Won"; 
                computerScore++; 
                computerScoreBoard.textContent = computerScore; 
            }else{ 
                result.textContent = "Player Won"; 
                playerScore++; 
                playerScoreBoard.textContent = playerScore; 
            } 
        }  
    }

    // Game over function
    const gameOver = (playerOptions, movesLeft) => {
        const chooseMove = document.querySelector(".element");
        const result = document.querySelector(".result");
        const reloadBtn = document.querySelector(".reload");

        playerOptions.forEach(option => {
            option.style.display = "none";
        })

        chooseMove.innerText = 'Game Over!'
        movesLeft.style.display = 'none'; 
  
        if(playerScore > computerScore){ 
            result.style.fontSize = '2rem'; 
            result.innerText = 'You Won The Game!'
            result.style.color = '#308D46'; 
        } 
        else if(playerScore < computerScore){ 
            result.style.fontSize = '2rem'; 
            result.innerText = 'You Lost The Game'; 
            result.style.color = 'red'; 
        } 
        else{ 
            result.style.fontSize = '2rem'; 
            result.innerText = 'Tie'; 
            result.style.color = 'grey'
        } 
        reloadBtn.innerText = 'Restart'; 
        reloadBtn.style.display = 'flex'
        reloadBtn.addEventListener('click',() => { 
            window.location.reload(); 
       }) 
    }

    // Calling playGame function inside game
    playGame();
}

// Calling game function
game();