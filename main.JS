const computerPlay = ["Rock", "Paper", "Scissors"];

const random = Math.floor(Math.random() * computerPlay.length);
console.log(random, computerPlay[random]);



/*
function playRound(playerSelection, computerSelection) {
    // your code here!
    //}

 /*   const playerSelection = "own imput rock";
    /* Player types either rock paper or scissors.
    FIRST PART OF FUNCTION: User types in either rock, paper or scissors. Can be case insensitive.
    const computerSelection = computerPlay();
    /*console.log(playRound(playerSelection, computerSelection));

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