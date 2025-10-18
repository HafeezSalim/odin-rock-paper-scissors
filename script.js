function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3 + 1);
    if (randomNumber == 1) {
        return "rock";
    } else if (randomNumber == 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let userChoice = prompt("Please select a choice [rock/paper/scissors]: ");
    return userChoice;
}

function playRound(humanChoice,computerChoice) {
    let winner = "neither";
    humanChoice = humanChoice.toLowerCase();

    switch (humanChoice) {
        case "rock":
            if (computerChoice == "rock") {
                
            } else if (computerChoice == "paper") {
                winner = "computer";
            } else if (computerChoice == "scissors") {
                winner = "human";
            }
            break;
        case "paper":
            if (computerChoice == "rock") {
                winner = "human";
            } else if (computerChoice == "paper") {
            } else if (computerChoice == "scissors") {
                winner = "computer";
            }
            break;
        case "scissors":
            if (computerChoice == "rock") {
                winner = "computer";
            } else if (computerChoice == "paper") {
                winner = "human";
            } else if (computerChoice == "scissors") {

            }
            break;
    }
    return winner;
}

function playGame(event) {

    //for (let i=1; i<6; i++) {
    let roundWinner = "";
    let computerChoice = getComputerChoice();
    let humanChoice = "";
    round++;
    if (event.target.classList.contains("rock")) {
        humanChoice = "rock";
    } else if (event.target.classList.contains("paper")) {
        humanChoice = "paper";
    } else {
        humanChoice = "scissors";
    }

    //declare nodes and clean children
    let extraDOM = document.querySelector(".extraDOM");
    extraDOM.replaceChildren();
    let roundNumber = document.createElement("div");
    roundNumber.classList.add("roundNumber");
    let roundChoiceDisplay = document.createElement("div");
    roundChoiceDisplay.classList.add("roundChoiceDisplay");
    let roundResult = document.createElement("div");
    roundResult.classList.add("roundResult");
    let currentScore = document.createElement("div");
    currentScore.classList.add("currentScore");

    let linebreak1 = document.createElement("br");
    linebreak1.classList.add("linebreak");
    let linebreak2 = document.createElement("br");
    linebreak2.classList.add("linebreak");

    roundWinner = playRound(humanChoice,computerChoice);
    if (roundWinner == "human") {
        humanScore++;
        roundResult.textContent = "You won this round!";
    } else if (roundWinner == "computer") {
        computerScore++;

        roundResult.textContent = "You lost this round!";
    } else {

        roundResult.textContent = "Both tied this round!";
    }

    roundNumber.textContent = "Round Number " + round + ".";
    roundChoiceDisplay.textContent = "Human choice: " + humanChoice + ". Computer choice: " + computerChoice + ".";
    currentScore.textContent = "Human score so far: " + humanScore + ". Computer score so far: " + computerScore + ".";
    
    //append nodes to DOM tree
    extraDOM.appendChild(roundNumber);
    extraDOM.appendChild(linebreak1);
    extraDOM.appendChild(roundChoiceDisplay);
    extraDOM.appendChild(roundResult);
    extraDOM.appendChild(linebreak2);
    extraDOM.appendChild(currentScore);

    
    //}
    
    /*Results*/
    if (humanScore == 5 || computerScore == 5) {

        let wrapper = document.querySelector(".wrapper");
        wrapper.replaceChildren();
    
        if ((humanScore > computerScore)) {
            roundResult.textContent = "You won the Rock-Paper-Scissors game! Congrats!";
    }   else {
            roundResult.textContent = "You lost the Rock-Paper-Scissors game! Better luck next time.";
        }
    currentScore.textContent = "Human total score: " + humanScore + ". Computer total score: " + computerScore + ". Total number of rounds: " + round + ".";

    wrapper.appendChild(roundResult);
    wrapper.appendChild(linebreak2);
    wrapper.appendChild(currentScore);

    }
    
    
}

//playGame();

let humanScore = 0;
let computerScore = 0;
let round = 0;


let rockButton = document.querySelector(".rock");
let paperButton = document.querySelector(".paper");
let scissorsButton = document.querySelector(".scissors");

rockButton.addEventListener("click", playGame);
paperButton.addEventListener("click", playGame);
scissorsButton.addEventListener("click", playGame);