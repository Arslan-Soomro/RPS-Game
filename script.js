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

function playRound(playerSelection, computerSelection){
    if(playerSelection == computerSelection){
        return "It is a tie";
    }else if((playerSelection == "Rock" && computerSelection == "Scissors") || (playerSelection == "Scissors" && computerSelection == "Paper") || (playerSelection == "Paper" && computerSelection == "Rock")){
        return (`You Win! ${playerSelection} beats ${computerSelection}`);
    }else{
        return (`You Lose! ${computerSelection} beats ${playerSelection}`);
    }
}

function game(){
    playerScore = 0;
    computerScore = 0;
    let result;

    for(let i = 0; i < 5; i++){
        result = playRound(playerPlay(), computerPlay());
        console.log(result);
        if(result.includes('Win')){
            playerScore++;
        }else{
            computerScore++;
        }
    }

    if(playerScore > computerScore){
        return "Player Wins The Game!";
    }else{
        return "Computer Wins The Game!";
    }
}