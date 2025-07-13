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
                console.log("You tied! Rock for both.");
            } else if (computerChoice == "paper") {
                console.log("You lose! Paper beats rock.");
                winner = "computer";
            } else if (computerChoice == "scissors") {
                console.log("You win! Rock beats scissors.");
                winner = "human";
            }
            break;
        case "paper":
            if (computerChoice == "rock") {
                console.log("You win! Paper beats rock.");
                winner = "human";
            } else if (computerChoice == "paper") {
                console.log("You tied! Paper for both.");
            } else if (computerChoice == "scissors") {
                console.log("You lose! Scissors beats paper.");
                winner = "computer";
            }
            break;
        case "scissors":
            if (computerChoice == "rock") {
                console.log("You lose! Rock beats scissors");
                winner = "computer";
            } else if (computerChoice == "paper") {
                console.log("You win! Scissors beats paper.");
                winner = "human";
            } else if (computerChoice == "scissors") {
                console.log("You tied! Scissors for both.");
            }
            break;
    }
    return winner;
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (let i=1; i<6; i++) {
        let roundWinner = "";
        let computerChoice = getComputerChoice();
        let humanChoice = getHumanChoice();

        console.log("ROUND ", i);
        roundWinner = playRound(humanChoice,computerChoice);
        if (roundWinner == "human") {
            humanScore++;
        } else if (roundWinner == "computer") {
            computerScore++;
        }
        console.log("Human choice this round: ", humanChoice, ". Computer choice this round: ", computerChoice, ".");
        console.log("Human score so far: ", humanScore, ". Computer score so far: ", computerScore, ".");
    }
    /*Results*/
    if (humanScore > computerScore) {
        console.log("You won the Rock-Paper-Scissors game! Congrats!");
    } else if (humanScore < computerScore) {
        console.log("You lost the Rock-Paper-Scissors game! Better luck next time.");
    } else {
        console.log("Nobody won the Rock-Paper-Scissors game. It's a tie!");
    }
    console.log("Human total score: ", humanScore, ". Computer total score: ", computerScore, ".");
    
}

playGame();


