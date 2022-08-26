let playerSelection = prompt("Rock,paper or scissors");

function computerSelection(){
    randomIndex = Math.floor(Math.random() * 3)
    const choices = ['rock','paper','scissors']
    return choices[randomIndex]
}

function PlayRound(playerSelection,computerSelection){
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
}