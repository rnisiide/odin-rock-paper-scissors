

let choices = ['rock', 'paper', 'scissors']
// rock = 0, paper = 1, scissors = 2

const question = prompt('Pick rock, paper, or scissors!') ;
let playerSelection = question.toLowerCase(); 


function computerPlay() {
    return choices[Math.floor(Math.random() * choices.length)];
}

const computerSelection = computerPlay();


function playRound(playerSelection, computerSelection) {

    if (playerSelection === choices[1] && computerSelection === choices[0]) {return 'You win! Paper beats Rock!'
    } else if (playerSelection === choices[1] && computerSelection === choices[2]) {return 'You lose! Scissors beat paper!'
    } else if (playerSelection === choices[2] && computerSelection === choices[0]) {return 'You lose! Rock beats scissors!'
    } else if (playerSelection === choices[2] && computerSelection === choices[1]) {return 'You win! Scissor beats paper!'
    } else if (playerSelection === choices[0] && computerSelection === choices[1]) {return 'You lose! Paper beats rock!'
    } else if (playerSelection === choices[0] && computerSelection === choices[2]) {return 'You win! Rock beats scissors!'
    } else if (playerSelection === computerSelection) {return 'DRAW!!!!'
    } else {return 'Invalid option'
    }
}



console.log(playRound(playerSelection, computerSelection) + ' Player selection: ' + playerSelection + '. Computer selection: ' + computerSelection);




function game() {

    for (let i = 0; i < 5; i++) {
        // your code here!
     }

}
