const gameChoices = ["rock", "paper", "scissors"];
let computerChoice;
let userChoice;
let userScore;
let computerScore;

//Loop through 5 games of rock paper scissors
function game(){
    userScore = 0;
    computerScore = 0;
    for(let i = 0; i < 5; i++){
        computerChoice = getComputerChoice(gameChoices);
        userChoice = prompt("Enter your choice (rock paper or scissors) or cancel to end game");
        if (userChoice.toLowerCase() === "cancel"){
            return;
        }
        checkUserChoice();
        playRound(); 
    }
    if(userScore > computerScore){
        alert(`You win! You scored ${userScore} and the computer scored ${computerScore}`);
    } else if(computerScore > userScore){
        alert(`You lost! You scored ${userScore} and the computer scored ${computerScore}`);
    } else{
        alert(`Its a draw! You have both scored ${userScore}`);
    }
}

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
function playRound(){
    if (userChoice === "rock"){
        if (computerChoice === "scissors"){
            alert(`You are the winner! ${userChoice} beats ${computerChoice}.`);
            userScore += 1;
        } else if(computerChoice === "paper"){
            alert(`The computer is the winner! ${computerChoice} beats ${userChoice}.`);
            computerScore += 1;
        } else{
            alert(`It's a draw! You both chose ${userChoice}`)
            computerScore += 1;
            userScore += 1;
        }

    } else if (userChoice === "scissors"){
        if (computerChoice === "paper"){
            alert(`You are the winner! ${userChoice} beats ${computerChoice}.`);
            userScore += 1;
        } else if(computerChoice === "rock"){
            alert(`The computer is the winner! ${computerChoice} beats ${userChoice}.`);
            computerScore += 1;
        } else{
            alert(`It's a draw! You both chose ${userChoice}`)
            computerScore += 1;
            userScore += 1;
        }

    } else if (userChoice === "paper"){
        if (computerChoice === "rock"){
            alert(`You are the winner! ${userChoice} beats ${computerChoice}.`);
            userScore += 1;
        } else if(computerChoice === "scissors"){
            alert(`The computer is the winner! ${computerChoice} beats ${userChoice}.`);
            computerScore += 1;
        } else{
            alert(`It's a draw! You both chose ${userChoice}`)
            computerScore += 1;
            userScore += 1;
        }
    }
}
