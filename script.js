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

    }
    else if (playerSelection == 'rock' && computerSelection == 'scissors'){

    }
    else if (playerSelection == 'paper' && computerSelection == 'rock'){

    }
    else if (playerSelection == 'scissors' && computerSelection == 'paper'){
        
    }
    else if (playerSelection == 'paper' && computerSelection == 'scissors'){
        
    }
    else if (playerSelection == 'scissors' && computerSelection == 'rock'){
        
    }
    else{
        
    }
}