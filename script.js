let choices = ['rock', 'paper', 'scissors']
// rock = 0, paper = 1, scissors = 2

let playerScore = 0;
let computerScore = 0;
let playerSelection;
let computerSelection;
let roundResult;
const modal = document.getElementById('myModal');
const modalh1 = document.getElementById('modalh1');
const modalPara = document.getElementById("modalPara");
const modalSpan = document.getElementById('modalSpan');
const humanColumn = document.querySelector('#humanImage');
const computerColumn = document.querySelector('#computerImage');
const humanPick = document.createElement('img');
const computerPick = document.createElement('img');
const container = document.querySelector('#container');

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function refreshPage(){
    reload = window.location.reload();
} 


        
function computerPlay() {
    return choices[Math.floor(Math.random() * choices.length)];    
}

function playGame() {
    computerSelection = computerPlay();
   if (computerSelection === choices[0]) {
        computerPick.src = "./images/icon-rock.png";    
    }
    if (computerSelection === choices[1]) {
        computerPick.src = "./images/icon-paper.png";    
    }
    if (computerSelection === choices[2]) {
        computerPick.src = "./images/icon-scissors.png";    
    }
   
    console.log(playerSelection);
    console.log(computerSelection);
    
 

    const content = document.querySelector('.content');
    const humanResult = document.getElementById ('human');            
    
    
    removeAllChildNodes(container)
   

 
    if (playerSelection === choices[1] && computerSelection === choices[0]) {
     playerScore += 1; content.textContent = 'You win! Paper beats Rock!';     
    } 

    if (playerSelection === choices[1] && computerSelection === choices[2]) {
     computerScore += 1; content.textContent = 'You lose! Scissors beat paper!'; 
    }

    if (playerSelection === choices[2] && computerSelection === choices[0]) {
     computerScore += 1; content.textContent = 'You lose! Rock beats scissors!';
    } 
    if (playerSelection === choices[2] && computerSelection === choices[1]) {
     playerScore += 1; content.textContent = 'You win! Scissor beats paper!'; 
    } 
    if (playerSelection === choices[0] && computerSelection === choices[1]) {
     computerScore += 1; content.textContent = 'You lose! Paper beats rock!';
    } 
    if (playerSelection === choices[0] && computerSelection === choices[2]) {
     playerScore += 1; content.textContent =  'You win! Rock beats scissors!';
    } 
    if (playerSelection === computerSelection) {content.textContent ='あいこでしょ!\nDRAW!!!!';
    }

 humanPick.classList.add('pick');
 humanColumn.appendChild(humanPick);
 computerPick.classList.add('pick');
 computerColumn.appendChild(computerPick);
 content.classList.add('result')
 container.appendChild(content);

console.log(`Player score: ${playerScore}. Computer score: ${computerScore}.`);


const playerText = document.querySelector('.playerText');
playerText.textContent = `${playerScore}`;
const computerText = document.querySelector('.computerText');
computerText.textContent = `${computerScore}`;


// modal modalh1 modalPara



if (playerScore == 5) {
    modal.style.display = 'block';
    container.removeChild(content);
    content.textContent = 'Human wins. Humanity is saved! ';
    container.appendChild(content);
    modalh1.textContent = 'Human wins!';
    modalPara.textContent = 'Humanity is saved!!';
   
    modalSpan.onclick = function() {
        modal.style.display = "none";
      }
    
    //modalBtn.addEventListener('click', reload, false);

    playerScore = 0;
    computerScore = 0;
}

if (computerScore == 5) {
    modal.style.display = 'block';
    container.removeChild(content);
    content.textContent = "Zombie wins. WE'RE DOOOOOMED!!!";
    container.appendChild(content);

    modalh1.textContent = 'Zombie wins!';
    modalPara.textContent = "WE'RE DOOOOOMED!!";
    
    modalSpan.onclick = function() {
        modal.style.display = "none";
      }

    playerScore = 0;
    computerScore = 0;
}
};


const rock = document.querySelector('#rock');
rock.addEventListener ('click', () => {
   playerSelection = 'rock';
   humanPick.src = "./images/icon-rock.png"
   playGame();
   });

const paper = document.querySelector('#paper');
paper.addEventListener ('click', () => {
    playerSelection = 'paper';
    humanPick.src = "./images/icon-paper.png"
    playGame();
});


const scissors = document.querySelector('#scissors');
scissors.addEventListener ('click', () => {
    playerSelection = 'scissors';
    humanPick.src = "./images/icon-scissors.png"
    playGame();
});



