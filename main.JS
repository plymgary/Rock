const playerSelectionChoice = prompt("Rock, paper or scissors?")
const playerSelection = playerSelectionChoice.toLowerCase();
const computerSelectionChoice = ["rock", "paper", "scissors"];
const computerSelection = computerSelectionChoice[Math.floor(Math.random() * computerSelectionChoice.length)];

function computerChoice() {
  let result = computerSelection;
  return computerSelection;
}

console.log (computerChoice());

function playerChoice() {
  let result = playerSelection;
  return playerSelection;
}

console.log (playerChoice());


function roundResults() {
  if (playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "scissors" && computerSelection === "paper" || playerSelection === "paper" && computerSelection === "rock") {
    return ('You Win!');
  } else if (playerSelection === "scissors" && computerSelection === "scissors" || playerSelection === "paper" && computerSelection === "paper" || playerSelection === "rock" && computerSelection === "rock") {
    return ("It's a draw!");
  } else {
    return ("Computer Wins!");
    };
}

console.log(roundResults());