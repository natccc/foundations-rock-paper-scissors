let computerScore = 0;
let humanScore = 0;

const results = document.querySelector("#results");
const score = document.querySelector("#score");
const div = document.querySelector("div");

function playRound(humanChoice) {
  function getComputerChoice() {
    const number = Math.floor(Math.random() * 3);
    switch (number) {
      case 0:
        return "Rock";
      case 1:
        return "Paper";
      case 2:
        return "Scissors";
    }
  }

  const computerChoice = getComputerChoice();

  if (humanChoice === computerChoice) {
    results.innerText = `It's a tie\n`;
  } else if (
    (humanChoice === "Rock" && computerChoice === "Scissors") ||
    (humanChoice === "Paper" && computerChoice === "Rock") ||
    (humanChoice === "Scissors" && computerChoice === "Paper")
  ) {
    results.innerText = `You win! ${humanChoice} beats ${computerChoice}\n`;
    humanScore++;
  } else {
    results.innerText = `You lose! ${computerChoice} beats ${humanChoice}\n`;
    computerScore++;
  }

  score.innerText = `Computer score: ${computerScore}\nYour score: ${humanScore}`;

  if (computerScore === 5) endGame("computer");
  if (humanScore === 5) endGame("human");
  results.innerText=""
}

const winnerText = document.querySelector("#winner");

const buttons = document.querySelectorAll("button");
buttons.forEach((button) =>
  button.addEventListener("click", function () {
    playRound(this.id);
  })
);

function endGame(winner) {
  if (winner === "human") winnerText.innerText = "You win!";
  else winnerText.innerText = "You lose";
}


