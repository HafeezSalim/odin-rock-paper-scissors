function getComputerChoice () {
    let computerChoice = "";
    let randomNumber = Math.floor(Math.random() * 3 + 1);
    if (randomNumber == 1) {
        computerChoice = "rock";
    } else if (randomNumber == 2) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
    return computerChoice
}

function getHumanChoice() {
    let userChoice = prompt("Please select a choice [rock/paper/scissors]: ");
    userChoice = userChoice.toLowerCase();
    return userChoice.toLowerCase();
}

let humanScore = 0;
let computerScore = 0;