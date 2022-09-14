const gameChoices = ["rock", "paper", "scissors"];
let userChoice = prompt("Enter your choice (rock paper or scissors)");

function getComputerChoice(array){
    let index = Math.floor(Math.random() * 3);
    return array[index];
}

getComputerChoice(gameChoices);