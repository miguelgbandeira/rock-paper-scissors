const rock = document.querySelector("#rock");
const scissors = document.querySelector("#scissors");
const paper = document.querySelector("#paper");
const roundResult = document.querySelector(".result");
const playerScoreDiv = document.querySelector(".player-score");
const computerScoreDiv = document.querySelector(".computer-score");

let playerScore = 0;
let computerScore = 0;

rock.addEventListener("click", () => {
  roundResult.textContent = "";
  console.log(playRound("rock", getComputerChoice()));
});

paper.addEventListener("click", () => {
  console.log(playRound("paper", getComputerChoice()));
});

scissors.addEventListener("click", () => {
  console.log(playRound("scissors", getComputerChoice()));
});

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);

  switch (randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  if (playerScore >= 5 || computerScore >= 5) {
    roundResult.textContent = "Game Finished";
    return;
  }
  if (playerSelection === computerSelection) {
    roundResult.textContent = "It was a draw!";
    return 2;
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    roundResult.textContent = "You won!";
    playerScore++;
    playerScoreDiv.textContent = `Player: ${playerScore}`;
    return 0;
  } else {
    roundResult.textContent = "You lost!";
    computerScore++;
    computerScoreDiv.textContent = `Computer: ${computerScore}`;
    return 1;
  }
}

function playGame(playerSelection) {
  let playerScore = 0;
  let computerScore = 0;

  while (playerScore < 5 || computerScore < 5) {}

  for (let i = 0; i < 5; i++) {
    let result = playRound(playerSelection, getComputerChoice());
    if (result == 0) {
      playerScore++;
    } else if (result == 1) {
      computerScore++;
    } else {
      playerScore++;
      computerScore++;
    }
  }

  getWinner(playerScore, computerScore);
}

function getWinner(playerScore, computerScore) {
  if (playerScore > computerScore) {
    console.log(
      `Player won! The result was ${playerScore} against ${computerScore}`
    );
  } else if (computerScore > playerScore) {
    console.log(
      `You lost. The computer won ${computerScore} against ${playerScore}`
    );
  } else {
    console.log("It was a draw");
  }
}
