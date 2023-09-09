const buttons = document.querySelectorAll("button");
const resultEl = document.getElementById("result");
const resultE2 = document.getElementById("statistics");
const playerScoreEl = document.getElementById("user-score");
const computerScoreEl = document.getElementById("computer-score");

const leaderboard = document.getElementById("leaderboard");

function updateLeaderboard(winner, icon, time) {
  const listItem = document.createElement("li");
  listItem.innerHTML = `${icon} ${winner} - ${time}`;
  leaderboard.appendChild(listItem);
}

let playerScore = 0;
let computerScore = 0;

let time;
let winner;
let winnerIcon;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const result = playRound(button.id, computerPlay());
    const result1 = score(button.id, computerPlay());
    resultE2.textContent = result1;
    resultEl.textContent = result;
  });
});

function computerPlay() {
  const choices = ["rock", "paper", "scissors"];
  const randomChoice = Math.floor(Math.random() * choices.length);
  return choices[randomChoice];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    time = new Date().toLocaleTimeString();
    return "It's a Tie!";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    time = new Date().toLocaleTimeString();
    winner = "Player";
    playerScore++;
    playerScoreEl.textContent = playerScore;
    winnerIcon = "&#x1F44A;";
    updateLeaderboard();
    return "You Win! " + playerSelection + " beats " + computerSelection;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    time = new Date().toLocaleTimeString();
    winner = "Player";
    playerScore++;
    playerScoreEl.textContent = playerScore;
    winnerIcon = "&#x1f590";
    updateLeaderboard();
    return "You Win! " + playerSelection + " beats " + computerSelection;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    time = new Date().toLocaleTimeString();
    winner = "Player";
    playerScore++;
    playerScoreEl.textContent = playerScore;
    winnerIcon = "&#x270c;";
    updateLeaderboard();
    return "You Win! " + playerSelection + " beats " + computerSelection;
  } else {
    time = new Date().toLocaleTimeString();
    winner = "Computer";
    computerScore++;
    computerScoreEl.textContent = computerScore;
    winnerIcon = "&#x1f590;";
    updateLeaderboard();
    return "You Lose! " + computerSelection + " beats " + playerSelection;
  }
}

function updateLeaderboard() {
  const leaderboardEl = document.getElementById("leaderboard");
  const entryEl = document.createElement("div");
  entryEl.innerHTML = `${time} ${winner} wins by ${winnerIcon}`;
  leaderboardEl.appendChild(entryEl);
}



let win = "";
let lose = "";
function score(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    win = "";
    lose = "";
    return "It's a tie!";
  }
  else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")) {
    playerScore++;
    playerScoreEl.textContent = playerScore;
    win = "You";
    lose = "Computer";
    return " You win! " + playerSelection + " beats " + computerSelection;
  }
  else {
    computerScore++;
    computerScoreEl.textContent = computerScore;
    win = "Computer";
    lose = "You";
    return " You lose! " + computerSelection + " beats " + playerSelection;
  }
}
function updateScores() {
  playerScoreEl.textContent = playerScore;
  computerScoreEl.textContent = computerScore;
}
function updateResultText(result) {
  if (win !== "" && lose !== "") {
    resultEl.textContent = win + " wins! " + win + " scored " + playerScore + " points and " + lose + " scored " + computerScore + " points.";
  }
  else {
    resultEl.textContent = result;
  }
}
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    updateScores();
    updateResultText(result);
  });
});

