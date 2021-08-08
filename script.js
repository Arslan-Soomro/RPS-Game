/*

function playerPlay(){
    let choice = prompt("Choose Rock, Paper or Scissors").toLowerCase();
    switch(choice){
        case 'rock':
            return 'Rock';
        case 'paper':
            return 'Paper';  
        default:
            return 'Scissors';
    }
}

*/


const roundCount = document.querySelector("#round-count");
const playerChoice = document.querySelector("#player-choice");
const computerChoice = document.querySelector("#computer-choice");
const startBtn = document.querySelector("#start-btn");
const restartBtn = document.querySelector("#restart");
const gameInfo = document.querySelector("#game-info"); 
const pScore = document.querySelector("#p-score");
const cScore = document.querySelector("#c-score");

let playerScore = 0;
let computerScore = 0;
let playing = false; //To block firing of click event while the computer is making a choice


playerChoice.addEventListener('click', function (e) {
    switch(playerChoice.textContent){
        case "Rock":
            playerChoice.textContent = "Paper";
            break;
        case "Paper":
            playerChoice.textContent = "Scissors";
            break;
        case "Scissors":
            playerChoice.textContent = "Rock";
            break;
        default:
            playerChoice.textContent = "Rock";
            break;
    }
});

function computerPlay(){
    let num = Math.floor(Math.random()*3)+1;
    switch(num){
        case 1:
            return "Rock";
        case 2:
            return "Scissors";
        case 3:
            return "Paper";
    }
}

function playRound(playerSelection, computerSelection){
    if(playerSelection == computerSelection){
        return "It is a tie";
    }else if((playerSelection == "Rock" && computerSelection == "Scissors") || (playerSelection == "Scissors" && computerSelection == "Paper") || (playerSelection == "Paper" && computerSelection == "Rock")){
        return (`You Win! ${playerSelection} beats ${computerSelection}`);
    }else{
        return (`You Lose! ${computerSelection} beats ${playerSelection}`);
    }
}


function checkWinner(scoreP, scoreC){
    if(scoreP > scoreC){
        return "You Win! Computer lost the game.";
    }else if(scoreC > scoreP){
        return "You Lose! Computer won the game.";
    }else{
        return "It is a tie, between you and the computer."
    }
}

function game(){
    if(+roundCount.textContent <= 5 && playing == false){
        playing = true;

        if((playerChoice.textContent == 'Rock' || playerChoice.textContent == 'Paper' || playerChoice.textContent == 'Scissors')){
            let timerID = setInterval(() => {
                computerChoice.textContent = computerPlay();
            }, 80);
        

            setTimeout(() => {
                clearInterval(timerID);
                gameInfo.textContent = playRound(playerChoice.textContent, computerChoice.textContent);
                
                roundCount.textContent = +roundCount.textContent + 1; //+ infront of a string converts that string into a number
                
                
                if(gameInfo.textContent.includes('Win')){
                    playerScore++;
                }else if(gameInfo.textContent.includes('Lose')){
                    computerScore++;
                }

                pScore.textContent = playerScore;
                cScore.textContent = computerScore;

                playing = false;

                if(+roundCount.textContent >= 6){
                    setTimeout(() => {
                        document.querySelector("#game-result").textContent = checkWinner(playerScore, computerScore);
                        document.querySelector("#overlay").style.display = 'flex';
                    }, 1000);
                }
            }, 1000);
        }
    }
}

startBtn.addEventListener('click', game);

restartBtn.addEventListener('click', () => {
    
    playerScore = 0;
    computerScore = 0;

    playerChoice.textContent = "Click Me";
    computerChoice.textContent = "Don't Click";
    roundCount.textContent = '1';
    gameInfo.textContent = 'Click The button at left to choose your weapon, the hit start.';

    document.querySelector("#overlay").style.display = 'none';

});
