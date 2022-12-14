let playerSelection ='';
document.addEventListener('click',(e)=>{
    if (! e.target.matches('.container > div')) return;
    document.querySelectorAll('.selected').forEach((el=>el.classList.remove('selected')))
    e.target.classList.toggle('selected');
    playerSelection = e.target.textContent;
})

document.querySelector('.submit-choice').addEventListener('click',(e)=>{
    e.preventDefault();
    const result = game();
    const resultElement = document.createElement('div');
    resultElement.innerHTML = result;
    document.body.appendChild(resultElement)
    resultElement.classList.add('result');
    if (winner =='player') resultElement.classList.add('winner')
    else if(winner =='computer') resultElement.classList.add('looser')
    else resultElement.classList.add('equal')
    if (playerScore == 5 || computerScore == 5){
        playerScore = 0;
        computerScore = 0;
        document.querySelectorAll('.result').forEach(el=>el.remove())
    }
    document.querySelector('#playerScore').textContent = playerScore;
    document.querySelector('#computerScore').textContent = computerScore;
})

function computerSelectionFunc(){
    randomIndex = Math.floor(Math.random() * 3);
    const choices = ['rock','paper','scissors'];
    return choices[randomIndex];
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

let winner = '';
let playerScore = 0;
let computerScore = 0;
function game(){
    let computerSelection = computerSelectionFunc()
    winner = PlayRound(playerSelection,computerSelection)
    if (winner == 'player') ++playerScore;
    else if (winner == 'computer') ++computerScore;

    return "<span>computerSelection: "+computerSelection.toUpperCase()+"</span>"+"<span>playerSelection: "+playerSelection.toUpperCase()+"</span>";
}

