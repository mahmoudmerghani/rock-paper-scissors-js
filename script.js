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
        alert(TIE_MESSAGE);
        return TIE_MESSAGE;
    }
    else if ((humanChoice === ROCK && computerChoice === SCISSORS) || 
             (humanChoice === PAPER && computerChoice === ROCK) ||
             (humanChoice === SCISSORS && computerChoice === PAPER)) {
        
        alert(WIN_MESSAGE + ` ${humanChoice} beats ${computerChoice}`);
        return WIN_MESSAGE;
    }
    else {
        alert(LOSE_MESSAGE + ` ${computerChoice} beats ${humanChoice}`);
        return LOSE_MESSAGE;
    } 
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        let result = playRound(humanSelection, computerSelection);

        if (result === WIN_MESSAGE) {
            humanScore++;
        }
        else if (result === LOSE_MESSAGE) {
            computerScore++;
        }
    }

    alert("Your score is " + humanScore);
    alert("Computer score is " + computerScore);

    if (humanScore > computerScore) {
        alert("You won over the Computer");
    }
    else if (humanScore < computerScore) {
        alert("Computer won");
    }
    else {
        alert("a tie");
    }
}
playGame();