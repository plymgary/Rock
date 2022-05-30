const playerSelectionChoice = prompt("Rock, paper or scissors?");
const playerSelection = playerSelectionChoice.toLowerCase();
const computerSelectionChoice = ["rock", "paper", "scissors"];
const computerSelection = computerSelectionChoice[Math.floor(Math.random() * computerSelectionChoice.length)];
let playerScore = 0;
let computerScore = 0;
let loopResults = roundResults();

function computerChoice() {
  let result = computerSelection;
  return computerSelection;
}

console.log (computerChoice());

function playerChoice() {
  let result = playerSelection;
  return playerSelection;
};

console.log (playerChoice());


function roundResults() {
  if (playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "scissors" && computerSelection === "paper" || playerSelection === "paper" && computerSelection === "rock") {
    return ('You Win!');
  } else if (playerSelection === "scissors" && computerSelection === "scissors" || playerSelection === "paper" && computerSelection === "paper" || playerSelection === "rock" && computerSelection === "rock") {
    return ("Its a draw!");
  } else {
    return ("Computer Wins!");
    };
}

console.log(roundResults());


function game() {
  for (let counter= 0; counter < 5; counter++) {
    roundResults();
    if (loopResults === 'You Win!') {
    ++ playerScore;
    } else if (loopResults === "Computer Wins!") {
    ++ computerScore;
  }
}
if (playerScore > computerScore) {
  return ('You win ' + playerScore + ' to ' + computerScore + '.');
} else if (playerScore < computerScore) {
  return ('You lose ' + computerScore + ' to ' + playerScore + '.');
} else {
  return 'It was a tie, you both won the same number of rounds.';
}
}

console.log(game());