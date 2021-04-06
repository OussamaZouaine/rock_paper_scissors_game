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
        console.log('you Win!');
    } else if (playerSelection === computerSelection) {
        console.log("it's a tie");
    } else console.log('you lose!');
}

const playerSelection = 'rock';
const computerSelection = computerPlay();
console.log(computerSelection);

console.log(playRound(playerSelection, computerSelection));
