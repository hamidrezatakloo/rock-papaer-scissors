let playerSelection = prompt("Rock,paper or scissors");

function computerSelection(){
    randomIndex = Math.floor(Math.random() * 3)
    const choices = ['rock','paper','scissors']
    return choices[randomIndex]
}

function PlayRound(playerSelection,computerSelection){
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection == 'rock' && computerSelection == 'paper'){
        return 'computer'
    }
    else if (playerSelection == 'rock' && computerSelection == 'scissors'){
        return 'player'
    }
    else if (playerSelection == 'paper' && computerSelection == 'rock'){
        return 'player'
    }
    else if (playerSelection == 'scissors' && computerSelection == 'paper'){
        return 'player'
    }
    else if (playerSelection == 'paper' && computerSelection == 'scissors'){
        return 'computer'
    }
    else if (playerSelection == 'scissors' && computerSelection == 'rock'){
        return 'computer'
    }
    else{
        return 'equal'
    }
}

function game(){
    
    for (let i = 0; i<5; i++){
        
    }

}