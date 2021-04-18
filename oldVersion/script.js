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
        return 'you Win!';
    } else if (playerSelection === computerSelection) {
        return "it's a tie";
    } else {
        computerScore++;
        return 'computer win!';
    }
}

function game() {
    for (let i = 0; i <= 5; i++) {
        const playerSelection = prompt(
            'enter your choice paper, rock, or scissor: '
        );
        const computerSelection = computerPlay();

        console.log(playRound(playerSelection, computerSelection));
        console.log('Player Score : ' + playerScore);
        console.log('Computer Score : ' + computerScore);
    }

    if (playerScore > computerScore) {
        console.log('The Player wins the game!');
    } else if (playerScore < computerScore) {
        console.log('The Computer wins the game');
    } else {
        console.log("it's a tie");
    }
}

game();
