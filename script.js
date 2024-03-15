function getComputerChoice() {

    const randomNumber = Math.floor(Math.random() * 3);

    switch (randomNumber) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}


function playRound(playerSelection, computerSelection) {

        if (playerSelection === computerSelection) {
            return 2;
        }
        else if (
            (playerSelection === 'rock' && computerSelection === 'scissors') ||
            (playerSelection === 'paper' && computerSelection === 'rock') ||
            (playerSelection === 'scissors' && computerSelection === 'paper')
        ) {
            return 0;
        } 
        else {
            return 1;
        }
}

function playGame(playerSelection) {
    let playerScore = 0;
    let computerScore = 0;

    for(let i = 0; i < 5; i++) {
        let result = playRound(playerSelection, getComputerChoice());
        if(result == 0) {
            playerScore++;
        } else if(result == 1) {
            computerScore++;
        } else {
            playerScore++;
            computerScore++;
        }
    }

    //console.log(playerScore, computerScore);

    getWinner(playerScore, computerScore);
}

function getWinner(playerScore, computerScore) {
    if(playerScore > computerScore) {
        console.log(`Player won! The result was ${playerScore} against ${computerScore}`);
    } else if(computerScore > playerScore) {
        console.log(`You lost. The computer won ${computerScore} against ${playerScore}`);
    } else {
        console.log("It was a draw");
    }
}

playGame("rock");