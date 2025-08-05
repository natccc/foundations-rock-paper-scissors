function getComputerChoice() {
  // return one of 'rock', 'paper','scissors'
  //use math.random to divide number into three categories
  const number = Math.floor(Math.random() * 3);
  switch (number) {
    case 0:
      return "rock";
    case 1:
      return "rock";
    case 2:
      return "paper";
  }
}

function getHumanChoice() {
  return prompt("Choice: ");
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    //human choose rock
    if (humanChoice === computerChoice) {
      console.log("Tie!");
      return;
    }

    if (humanChoice === "rock") {
      if (computerChoice === "scissors") {
        console.log("You win! Rock beats Scissors");
        humanScore++;
        return;
      } else {
        console.log("You lose! Paper beats Rock");
        computerScore++;
        return;
      }
    } else if (humanChoice === "paper") {
      if (computerChoice === "rock") {
        console.log("You win! Paper beats Rock");
        humanScore++;
        return;
      } else {
        console.log("You lose! Scissors beats Paper");
        computerScore++;
        return;
      }
    } else if (humanChoice === "rock") {
      if (computerChoice === "scissors") {
        console.log("You win! Paper beats Scissors");
        humanScore++;
        return;
      } else {
        console.log("You lose! Paper beats Rock");
        computerScore++;
        return;
      }
    }
  }

  for (let i = 0; i < 5; i++) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
  }
  console.log(`Computer score: ${computerScore}`);
  console.log(`Your score: ${humanScore}`);
}
playGame();
