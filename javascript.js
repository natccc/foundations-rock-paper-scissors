let computerScore = 0;
let humanScore = 0;

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
  console.log(computerChoice)

  const results = document.querySelector("#results");
  const score = document.querySelector("#score");

  if (humanChoice === computerChoice) {
    results.innerText += `It's a tie\n`;
  } else if (
    (humanChoice === "Rock" && computerChoice === "Paper") ||
    (humanChoice === "Paper" && computerChoice === "Rock") ||
    (humanChoice === "Scissors" && computerChoice === "Paper")
  ) {
    results.innerText += `You win! ${humanChoice} beats ${computerChoice}\n`;
    humanScore++;
  } else {
    results.innerText += `You lose! ${computerChoice} beats ${humanChoice}\n`;
    computerScore++;
  }

  score.innerText = `Computer score: ${computerScore}\nYour score: ${humanScore}`;
}

const buttons = document.querySelectorAll("button");
buttons.forEach((button) =>
  button.addEventListener("click", function () {
    playRound(this.id);
  })
);
