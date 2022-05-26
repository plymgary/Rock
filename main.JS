function playRound(playerSelection, computerSelection,result) {
  const computerChoice = ["rock", "paper", "scissors"];
  const random = Math.floor(Math.random() * computerChoice.length);
  computerSelection = computerChoice[random];
  playerSelection = prompt("Rock, paper or scissors?")
  playerSelection = playerSelection.toLowerCase();
  if (playerSelection == "rock" && computerSelection == "scissors" || playerSelection == "scissors" && computerSelection === "paper" || playerSelection == "paper" && computerSelection == "rock") {
  result = 'You Win!';
} else if (playerSelection == "scissors" && computerSelection == "scissors" || playerSelection == "paper" && computerSelection === "paper" || playerSelection == "rock" && computerSelection == "rock") {
  result = ("It's a draw!");
} else {
  result = ("Computer Wins!");
  };
console.log(playerSelection + " " + computerSelection + " " + result);

}

playRound();

/*
function playRound(playerSelection, computerSelection) {
  const computerChoice = ["rock", "paper", "scissors"];
  const random = Math.floor(Math.random() * computerChoice.length);
  computerSelection = computerChoice[random];
  playerSelection = prompt("Rock, paper or scissors?")
  playerSelection = playerSelection.toLowerCase();
console.log(playerSelection + " " + computerSelection);

}

playRound();

let playerSelection = playRound(playerSelection)
let computerSelection = playRound(computerSelection)



function roundResults(result){ 
if (playerSelection == "rock" && computerSelection == "scissors" || playerSelection == "scissors" && computerSelection === "paper" || playerSelection == "paper" && computerSelection == "rock") {
  result = 'You Win!';
} else if (playerSelection == "scissors" && computerSelection == "scissors" || playerSelection == "paper" && computerSelection === "paper" || playerSelection == "rock" && computerSelection == "rock") {
  result = ("It's a draw!");
} else {
  result = ("Computer Wins!");
  };
console.log(result);
}

roundResults();



/*
function roundResult() {
playRound();
let result;
if (playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "scissors" && computerSelection === "paper" || playerSelection === "paper" && computerSelection === "rock") {
  result = 'positive';
} else {
  result = 'NOT positive';
}
return result;
console.log(roundResult)
}


//}
/*
  computerSelection = code from previous computer go
  if and else here
  alert = ("Congratulations! You win!");
}

ALL CODE IN THIS BLOCK WORKS.
function playRound(playerSelection, computerSelection) {
  playerSelection = prompt("Rock, paper or scissors?")
  playerSelection = playerSelection.toLowerCase();
console.log(playerSelection + " " + computerSelection)
}
playRound();

//END OF WORKING BLOCK
/*
playRound = prompt("Rock, paper or scissors?")
playRound = playRound.toLowerCase();
if (playRound === 'rock' || playRound === 'paper' || playRound === 'scissors') {
} else {
  console.log("Error!");
}
console.log(playRound);


playRound('Goat');*/