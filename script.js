document.addEventListener('click',(e)=>{
    if (! e.target.matches('.container > div')) return;
    e.target.style.border = '4px solid #fafafa';
})



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
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i<5; i++){
        let playerSelection = prompt("Rock,paper or scissors");
        let winner = PlayRound(playerSelection,computerSelection())
        if (winner == 'player') ++playerScore;
        else if (winner == 'computer') ++computerScore;
    }

    return ("playerScore: "+playerScore+"\n computerScore: "+computerScore); 

}

