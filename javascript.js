function getComputerChoice() {
    let randomNumber = Math.random();

    let computerChoice = '';
    if (randomNumber <= 0.33) {
        computerChoice = "rock";
    } else if (randomNumber <= 0.66) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }

    return computerChoice;
}

function getHumanChoice() {
    let humanChoice = '';

    do {
        humanChoice = prompt("Select rock, paper, or scissors: ").toLowerCase();
        if (humanChoice != 'rock' && humanChoice !=  'paper' && humanChoice !=  'scissors') {
            alert("Invalid choice.");
        }
    } while (humanChoice != "rock" && humanChoice != "paper" && humanChoice != "scissors");

    return humanChoice;
}

function playGame() {
    alert("Let's play rock, paper, scissors for 5 rounds!")
    let humanScore = 0; 
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if (humanChoice == "rock" && computerChoice == "scissors" ||
            humanChoice == "paper" && computerChoice == "rock" ||
            humanChoice == "scissors" && computerChoice == "paper") {
            
            humanScore++;
            return `Computer chose ${computerChoice}. You win!`;
        } else if (humanChoice == computerChoice) {
            return `Computer chose ${computerChoice}. Draw!`; 
        } else {
            computerScore++;
            return `Computer chose ${computerChoice}. You lose!`;
        }
    }

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        let roundResult = playRound(humanSelection, computerSelection);
        alert(roundResult);
    }

    if (humanScore > computerScore) {
        alert(`With the scores of ${humanScore}-${computerScore}. Congratulations! You won!`); 
    } else if (humanScore < computerScore) {
        alert(`With the scores of ${humanScore}-${computerScore}. Too bad, you lose!`); 
    } else {
        alert(`With the scores of ${humanScore}-${computerScore}. It's a draw!`);
    }
}

playGame();