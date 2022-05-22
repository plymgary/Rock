const computerPlay = ["rock", "paper", "scissors"];

const random = Math.floor(Math.random() * computerPlay.length);
console.log(computerPlay[random]);

let playRound = prompt("Rock, paper or scissors?")
playRound = playRound.toLowerCase();
if (playRound === 'rock' || playRound === 'paper' || playRound === 'scissors') {
} else {
    console.log("Error!");
  }
  console.log(playRound);

function selectBoth(){
  if (playRound === "rock" && computerPlay === "scissors" || playRound === "scissors" && computerPlay === "paper" || playRound === "paper" && computerPlay === "rock") {
    greeting = "Congratulations! You win!";
  }
  else if (playRound === "scissors" && computerPlay === "scissors" || playRound === "paper" && computerPlay === "paper" || playRound === "rock" && computerPlay === "rock") {
    greeting = "It's a draw!";
  } else {
    greeting = "Computer Wins!";
  }
selectBoth()


//console.log(selectBoth(playRound, computerPlay));
  }
/*
let playRound = prompt("Rock, Paper or Scissors?");
const playerSelection = playRound.length;
const computerSelection = computerPlay.length;
console.log(playRound, computerPlay); */

/*
function bothSelected() { 
if (playRound === rock && computerPlay === scissors || playRound === scissors && computerPlay === paper || playRound === paper && computerPlay === rock) {
    greeting = "Congratulations! You win!";
if (playRound === scissors && computerPlay === scissors || playRound === paper && computerPlay === paper || playRound === rock && computerPlay === rock) {
        greeting = "It's a draw!";
  } else {
    greeting = "Computer Wins!";
  }
console.log(bothSelected);

/*
function playRound = prompt(question, rock, paper, scissors) {
    if (confirm(question)) yes();
    else no();
  }

  playRound(
    "Rock, Paper, Scissors?",
    function() { alert("You chose rock."); },
    function() { alert("You chose paper."); },
    function() { alert("You chose scissors."); }
  );

*/





/*
function bothSelected /* (MAYBE THIS DOESN'T NEED TO BE IT'S OWN FUNCTION? will declare round winner)  this has two paramenters 
//    1. playerSelection
        make this selection case InSenSitive
//    2. computerSelection 
            
/*FIRST PART OF FUNCTION: Compares playerSelection and computerSelection.
                Something like if rock => scissors, rock == rock, rock =< paper
                if playerselection rock and computerselction scissors 
                if playeerselection scissors and computerselection rock etc
                        LOOK UP: COMPARING VALUES OF TWO STRINGS AND ASSIGNING WHICH IS GREATER?
            
SECOND PART OF FUNCTION: declares a winner from the third part (displays a winning message (string)).

Winner of the round is delcared with string "You Lose! (Object) beats (object)"
//}



function game() 
    call playRound within this function.
    use loops to play these rounds.
    use prompt() to get input from the user
    use console log to display the winner of each round

    for (let i = 0; i < 5; i++) {
        // your code here!
     }
/*Final function game() is to see what round (of 5) that it is (use loops to achieve this). 
Will keep a tab on the score
    Will declare the winner afterwards.*/