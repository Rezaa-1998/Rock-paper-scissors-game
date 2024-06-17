const Choices = ["rock", "paper", "scissors"];

const checkWinner = (player, computer) => {
  if (player == computer) return "draw";
  switch (player) {
    case "rock":
      return computer === "paper" ? "computer" : "player";
      break;
    case "scissors":
      return computer === "rock" ? "computer" : "player";
      break;
    case "paper":
      return computer === "rock" ? "player" : "computer";
      break;
  }
};

let playerScore = 0;
let computerScore = 0;

const showResult = (winner) => {
  if (winner == "computer") {
    console.log("You lose!");
    computerScore++;
  } else if (winner == "player") {
    console.log("You win!");
    playerScore++;
  } else {
    console.log("it's a tie");
  }
  console.log(
    `Your Score is : ${playerScore}\n Computer Score is : ${computerScore}`
  );
};

const play = () => {
  const playerChoice = prompt("choose rock, paper, scissors");
  const playerChoosed = playerChoice?.trim().toLowerCase();
  if (
    typeof playerChoosed === "string" &&
    Choices.indexOf(playerChoosed) !== -1
  ) {
    console.log(`you choosed : ${playerChoosed} `);
  } else {
    console.log("You cheated");
    return;
  }
  const randomNumber = Math.floor(Math.random() * 3);
  const computerChoosed = Choices[randomNumber];
  console.log(`Computer choosed : ${computerChoosed}`);
  const winner = checkWinner(playerChoosed, computerChoosed);
  showResult(winner);
  console.log("----------------------------------------");
  play();
};

play();
