const gameChoices = ["rock", "paper", "scissors"];
let userChoice = prompt("Enter your choice (rock paper or scissors)");

function getComputerChoice(array){
    let index = Math.floor(Math.random() * 3);
    return array[index];
}

function checkUserChoice(){
    if (gameChoices.includes(userChoice.toLowerCase())){
        alert("That is one of the options!")
    } else{
        alert("You can only enter either rock paper or scissors!")
    }
}