const buttons = document.querySelectorAll('button');
const player = document.querySelector('.player-score > span');
const computer = document.querySelector('.computer-score > span');
const winner = document.querySelector('.winner');
const computerChoice = document.querySelector('.computer-choice > span');

let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    const choices = ['rock', 'paper', 'scissor'];

    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (
        (playerSelection === 'rock' && computerSelection === 'scissor') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissor' && computerSelection === 'paper')
    ) {
        playerScore++;
        // return 'you Win!';
    } else if (playerSelection === computerSelection) {
        // return "it's a tie";
    } else {
        computerScore++;
        // return 'computer win!';
    }
}

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        console.log(button.textContent);
        const computerSelection = computerPlay();
        console.log(computerSelection);
        computerChoice.textContent = computerSelection;
        playRound(button.textContent, computerSelection);
        player.textContent = playerScore;
        computer.textContent = computerScore;

        if (playerScore === 5) {
            winner.textContent = 'YAAY! You win!';
            playerScore = 0;
            computerScore = 0;
        }

        if (computerScore === 5) {
            winner.textContent = 'OOPS! You Lose!';
            playerScore = 0;
            computerScore = 0;
        }
    });
});
