const gameChoices = ["rock", "paper", "scissors"];
let computerChoice = getComputerChoice(gameChoices);
let userScore = 0;
let computerScore = 0;



//DOM selectors
const rockBtn = document.getElementById('rock-button');
const paperBtn = document.getElementById('paper-button');
const scissorsBtn = document.getElementById('scissors-button');
const computerScoreDisplay = document.getElementById('computer-score');
const userScoreDisplay = document.getElementById('user-score')
const resetBtn = document.getElementById('reset-button');
const textResultDisplay = document.getElementById('text-result')


//Hide reset button by default
resetBtn.style.display = 'none';


//Button event listeners
rockBtn.addEventListener('click', function clickFunction(){
    playRound('rock');
});

paperBtn.addEventListener('click', function clickFunction(){
    playRound('paper');
});

scissorsBtn.addEventListener('click', function clickFunction(){
    playRound('scissors');
});

resetBtn.addEventListener('click', () => {
    rockBtn.style.display = 'inline';
    scissorsBtn.style.display = 'inline';
    paperBtn.style.display = 'inline';
    resetBtn.style.display = 'none';
    userScore = 0;
    computerScore = 0;
    computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;
    userScoreDisplay.textContent = `User Score: ${userScore}`;
})



//Get the computers random choice for game
function getComputerChoice(array){
    let index = Math.floor(Math.random() * 3);
    return array[index];
}



//Check user input is valid
function checkUserChoice(){
    if (!gameChoices.includes(userChoice.toLowerCase())){
        alert("You can only enter either rock paper or scissors, or cancel to end game!")
        return;
    } 
}



//Play through one round of rock paper scissors and evaluate winner of round.
function playRound(userChoice){
    let displayMessage = '';
    if (userChoice === "rock"){
        if (computerChoice === "scissors"){
            displayMessage = `You are the winner! ${userChoice} beats ${computerChoice}.`;
            userScore += 1;
        } else if(computerChoice === "paper"){
            displayMessage = `The computer is the winner! ${computerChoice} beats ${userChoice}.`;
            computerScore += 1;
        } else{
            displayMessage = `It's a draw! You both chose ${userChoice}`;
        }
    } else if (userChoice === "scissors"){
        if (computerChoice === "paper"){
            displayMessage = `You are the winner! ${userChoice} beats ${computerChoice}.`;
            userScore += 1;
        } else if(computerChoice === "rock"){
            displayMessage = `The computer is the winner! ${computerChoice} beats ${userChoice}.`;
            computerScore += 1;
        } else{
            displayMessage = `It's a draw! You both chose ${userChoice}`;
        }
    } else if (userChoice === "paper"){
        if (computerChoice === "rock"){
            displayMessage = `You are the winner! ${userChoice} beats ${computerChoice}.`;
            userScore += 1;
        } else if(computerChoice === "scissors"){
            displayMessage = `The computer is the winner! ${computerChoice} beats ${userChoice}.`;
            computerScore += 1;
        } else{
            displayMessage = `It's a draw! You both chose ${userChoice}`;
        }
    }
    computerChoice = getComputerChoice(gameChoices);
    //Display and update scores
    computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;
    userScoreDisplay.textContent = `User Score: ${userScore}`;
    textResultDisplay.textContent = displayMessage;
    checkWinner();
}

//Check for winner
function checkWinner(){
    if(userScore === 5 && computerScore === 5){
        rockBtn.style.display = 'none';
        scissorsBtn.style.display = 'none';
        paperBtn.style.display = 'none';
        resetBtn.style.display = 'inline';
        textResultDisplay.textContent = "It's a draw!";
    }
    else if(userScore === 5){
        rockBtn.style.display = 'none';
        scissorsBtn.style.display = 'none';
        paperBtn.style.display = 'none';
        resetBtn.style.display = 'inline';
        textResultDisplay.textContent = 'You are the winner!';
    }else if(computerScore === 5){
        rockBtn.style.display = 'none';
        scissorsBtn.style.display = 'none';
        paperBtn.style.display = 'none';
        resetBtn.style.display = 'inline';
        textResultDisplay.textContent = 'The computer beat you!';
    }
}

