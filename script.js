const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";
const WIN_MESSAGE = "You WON !!";
const LOSE_MESSAGE = "You lost :(";
const TIE_MESSAGE = "a tie";

function getHumanChoice() {
    while (true) {
        let choice = prompt("Enter your choice").toLowerCase();
        if (choice === ROCK || choice === PAPER || choice === SCISSORS) {
            return choice;
        }
        else {
            alert("Invalid input. Please enter rock, paper, or scissors.");
        }
    }
}

function getComputerChoice() {
    const randomNumber = Math.random();
    if (randomNumber < 1 / 3) {
        return ROCK;
    }
    else if (randomNumber < 2 / 3) {
        return PAPER;
    }
    else {
        return SCISSORS;
    }
}

function playRound(humanChoice, computerChoice) {

        
    if (humanChoice === computerChoice) {
        return TIE_MESSAGE;
    }
    else if ((humanChoice === ROCK && computerChoice === SCISSORS) || 
             (humanChoice === PAPER && computerChoice === ROCK) ||
             (humanChoice === SCISSORS && computerChoice === PAPER)) {
        
        return WIN_MESSAGE;
    }
    else {
        return LOSE_MESSAGE;
    } 
}

// function playGame() {
//     let humanScore = 0;
//     let computerScore = 0;

//     for (let i = 0; i < 5; i++) {
//         let humanSelection = getHumanChoice();
//         let computerSelection = getComputerChoice();
//         let result = playRound(humanSelection, computerSelection);

//         if (result === WIN_MESSAGE) {
//             humanScore++;
//         }
//         else if (result === LOSE_MESSAGE) {
//             computerScore++;
//         }
//     }

//     alert("Your score is " + humanScore);
//     alert("Computer score is " + computerScore);

//     if (humanScore > computerScore) {
//         alert("You won over the Computer");
//     }
//     else if (humanScore < computerScore) {
//         alert("Computer won");
//     }
//     else {
//         alert("a tie");
//     }
// }
const round = document.querySelector("#round");
const game = document.querySelector("#game");
const score = document.querySelector("#score");
const playerResult = document.querySelector("#player-score");
const computerResult = document.querySelector("#computer-score");
const playAgain = document.querySelector("#play-again");
const result = document.querySelector("#result");
let playerScore = 0;
let computerScore = 0;
let counter = 1;

function playGame(e) {
    // ignore click on the parent div#game
    if (e.target.id === "game") {
        return;
    }
    const computerSelection = getComputerChoice()
    const roundResult = playRound(e.target.id, computerSelection);

    round.textContent = `Round ${counter + 1}/5`;
    if (roundResult === WIN_MESSAGE) {
        playerScore++;
        playerResult.textContent = `Your Score: ${playerScore}`;
        result.textContent = roundResult + ` ${e.target.id} beats ${computerSelection}`;
    }
    else if (roundResult === LOSE_MESSAGE) {
        computerScore++;
        result.textContent = roundResult + ` ${computerSelection} beats ${e.target.id}`;
        computerResult.textContent = `Computer Score: ${computerScore}`;
    }
    else {
        result.textContent = "a tie";
    }
    if (counter === 5) {
        showWinner();
        playerScore = 0;
        computerScore = 0;
        counter = 1;
        round.textContent = `Round 5/5`;
        game.removeEventListener("click", playGame);
        playAgain.style.display = "block";
        return;
    }
    counter++;
}

game.addEventListener("click", playGame);
playAgain.addEventListener("click", e => {
    document.querySelector("#winner").remove();
    round.textContent = `Round 1/5`;
    playerResult.textContent = "Your Score: 0";
    computerResult.textContent = "Computer Score: 0";
    result.textContent = "choose one to start the game";
    game.addEventListener("click", playGame);
    playAgain.style.display = "none";
})
function showWinner() {
    const winner = document.createElement("div");
    winner.id = "winner";
    if (playerScore > computerScore) {
        winner.textContent = "You won over the computer";
    }
    else if (playerScore < computerScore) {
        winner.textContent = "You lost against the Computer";
    }
    else {
        winner.textContent = "A Tie";
    }
    document.body.insertBefore(winner, playAgain);
}