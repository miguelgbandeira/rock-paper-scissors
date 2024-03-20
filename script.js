const rock = document.querySelector("#rock");
const scissors = document.querySelector("#scissors");
const paper = document.querySelector("#paper");
const roundResult = document.querySelector(".result");
const playerScoreDiv = document.querySelector(".player-score");
const computerScoreDiv = document.querySelector(".computer-score");
const playerChoice = document.querySelector(".player-choice");
const computerChoice = document.querySelector(".computer-choice");

let playerScore = 0;
let computerScore = 0;

rock.addEventListener("click", () => {
  handleClick("rock");
});

paper.addEventListener("click", () => {
  handleClick("paper");
});

scissors.addEventListener("click", () => {
  handleClick("scissors");
});

function handleClick(playerSelection) {
  let computerSelection = getComputerChoice();
  setPlayersChoices();
  playRound(playerSelection, computerSelection);
  if (isGameFinished()) {
    roundResult.textContent = "Game Finished";
    roundResult.textContent = getWinner();
    resetGame();
    return;
  }

  function setPlayersChoices() {
    let playerIcon = getIcon(playerSelection);
    let computerIcon = getIcon(computerSelection);

    playerChoice.textContent = playerIcon;
    computerChoice.textContent = computerIcon;
  }

  function getIcon(selection) {
    let icon;

    if (selection === "rock") {
      icon = "👊";
    } else if (selection === "paper") {
      icon = "✋";
    } else if (selection === "scissors") {
      icon = "✌️";
    }
    return icon;
  }
}

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
  if (playerSelection === computerSelection) {
    roundResult.textContent = "It was a draw!";
    roundResult.style.color = "white";
    return;
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    roundResult.textContent = "You won!";
    roundResult.style.color = "green";
    playerScore++;
    playerScoreDiv.textContent = `Player: ${playerScore}`;
    return;
  } else {
    roundResult.textContent = "You lost!";
    roundResult.style.color = "red";
    computerScore++;
    computerScoreDiv.textContent = `Computer: ${computerScore}`;
    return;
  }
}

function isGameFinished() {
  return playerScore >= 5 || computerScore >= 5;
}

function getWinner() {
  if (playerScore > computerScore) {
    return `Player won! The result was ${playerScore} against ${computerScore}`;
  } else if (computerScore > playerScore) {
    return `You lost. The computer won ${computerScore} against ${playerScore}`;
  } else {
    console.log("It was a draw");
  }
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  computerScoreDiv.textContent = "Computer: 0";
  playerScoreDiv.textContent = "Player: 0";
}
