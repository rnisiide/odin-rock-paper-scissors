let choices = ['rock', 'paper', 'scissors']
// rock = 0, paper = 1, scissors = 2

let playerScore = 0;
let computerScore = 0;


function game() {

    for (let i = 1; i <= 5; i++) {
        const question = prompt('Pick rock, paper, or scissors!') ;
        
        let playerSelection = question.toLowerCase();
         
        const computerSelection = computerPlay();
        
        function computerPlay() {
            return choices[Math.floor(Math.random() * choices.length)];
        }

        function playRound(playerSelection, computerSelection) {

            
        
            if (playerSelection === choices[1] && computerSelection === choices[0]) {playerScore += 1; return 'You win! Paper beats Rock!' //+1
            } else if (playerSelection === choices[1] && computerSelection === choices[2]) {computerScore += 1; return 'You lose! Scissors beat paper!' //-1
            } else if (playerSelection === choices[2] && computerSelection === choices[0]) {computerScore += 1; return 'You lose! Rock beats scissors!' //-1
            } else if (playerSelection === choices[2] && computerSelection === choices[1]) {playerScore += 1; return 'You win! Scissor beats paper!' //+1
            } else if (playerSelection === choices[0] && computerSelection === choices[1]) {computerScore += 1; return 'You lose! Paper beats rock!' //-1
            } else if (playerSelection === choices[0] && computerSelection === choices[2]) {playerScore += 1; return 'You win! Rock beats scissors!' //+1
            } else if (playerSelection === computerSelection) {return 'DRAW!!!!'
            } else {return 'Invalid option'
            }
        }

        function result() {

            if (playerScore > computerScore) {
                return 'Player wins. COMPUTER SUCKS!!!'
            } else {return 'Computer wins!! COMPUTER APOCALIPSE INCOMING!!!'}

        }

        console.log(`Round ${i}: ${playRound(playerSelection, computerSelection)}. Player selection: ${playerSelection}. Computer selection: ${computerSelection} `);
        console.log(`Player score: ${playerScore}. Computer score: ${computerScore}.`);
              
    }  
    console.log(result());
}






 /*
 just keeping this here in case i need to change somewhere later
 console.log(playRound(playerSelection, computerSelection) + ' Player selection: ' + playerSelection + '. Computer selection: ' + computerSelection); 
*/