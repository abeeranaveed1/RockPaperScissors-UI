const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const userResult = document.querySelector("#userResult");
const computerResult = document.querySelector("#computerResult");
const completeResult = document.querySelector("#completeResult");
const choiceBtns = document.querySelectorAll(".choiceBtn");
let playerSelection;
let computerSelection;
let result;

let user_score = 0;
let computer_score = 0;

choiceBtns.forEach((button) =>
  button.addEventListener("click", () => {
    if (user_score === 5 || computer_score === 5) return;
    playerSelection = button.textContent;
    computerPlay();
    playerText.textContent = `Player picked: ${playerSelection}`;
    computerText.textContent = `Computer picked: ${computerSelection}`;
    resultText.textContent = playRound();
    if (resultText.textContent === "You Win!") {
      user_score++;
      userResult.innerHTML = `User Score: ${user_score}`;
    } else if (resultText.textContent === "You Lose!") {
      computer_score++;
      computerResult.innerHTML = `Computer Score: ${computer_score}`;
    }
    if (user_score === 5 || computer_score === 5) {
      return user_score > computer_score
        ? (completeResult.innerHTML = "Congrats you won")
        : (completeResult.innerHTML = "Better luck next time, you Lost");
    }
  })
);

function computerPlay() {
  const randNum = Math.floor(Math.random() * 3) + 1;

  switch (randNum) {
    case 1:
      computerSelection = "ROCK";
      break;
    case 2:
      computerSelection = "PAPER";
      break;
    case 3:
      computerSelection = "SCISSORS";
      break;
  }
}
function playRound() {
  if (playerSelection == computerSelection) {
    return "It's a tie!";
  } else if (computerSelection == "ROCK") {
    return playerSelection == "PAPER" ? "You Win!" : "You Lose!";
  } else if (computerSelection == "PAPER") {
    return playerSelection == "SCISSORS" ? "You Win!" : "You Lose!";
  } else if (computerSelection == "SCISSORS") {
    return playerSelection == "ROCK" ? "You Win!" : "You Lose!";
  }
}
