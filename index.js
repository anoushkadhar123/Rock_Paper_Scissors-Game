const buttons = document.querySelectorAll("button");
const resultEl = document.getElementById("result");
const playerScoreEl = document.getElementById("user-score");
const computerScoreEl = document.getElementById("computer-score");
const victory = document.getElementById("victory");
let playerScore = 0;
let computerScore = 0;
let time;
let winner;
let winnericon;
const leaderboard = document.getElementById("leaderboard");

function updateLeaderboard() {
    const listItem = document.createElement("li");
    listItem.innerHTML = `${time} ${winner} wins by ${winnericon}`;
    leaderboard.appendChild(listItem);
    if(playerScore === computerScore){
        victory.textContent = "It's a Tie";
    }
    else if(playerScore > computerScore){
        victory.textContent = "USER  (🏆)";
    }
    else{
        victory.textContent = "Computer (🏆)" ;
    }
}
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const result = playRound(button.id, computerPlay());
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
        time = getCurrentTime();
        return "It's a tie!";
    }
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        time = getCurrentTime();
        winner = "User";
        playerScore++;
        playerScoreEl.textContent = playerScore;
        winnericon = "&#x1F44A;";
        updateLeaderboard();
        return "You win! " + playerSelection + " beats " + computerSelection;
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        time = getCurrentTime();
        winner = "User";
        playerScore++;
        playerScoreEl.textContent = playerScore;
        winnericon = "&#x1f590;";
        updateLeaderboard();
        return "You win! " + playerSelection + " beats " + computerSelection;
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        time = getCurrentTime();
        winner = "User";
        playerScore++;
        playerScoreEl.textContent = playerScore;
        winnericon = "&#x270c;";
        updateLeaderboard();
        return "You win! " + playerSelection + " beats " + computerSelection;
    }
    else if (computerSelection === "rock" && playerSelection === "scissors") {
        time = getCurrentTime();
        winner = "Computer"
        computerScore++;
        computerScoreEl.textContent = computerScore;
        winnericon = "&#x1F44A;";
        updateLeaderboard();
        return "You lose! " + computerSelection + " beats " + playerSelection;
    }
    else if (computerSelection === "paper" && playerSelection === "rock") {
        time = getCurrentTime();
        winner = "Computer"
        computerScore++;
        computerScoreEl.textContent = computerScore;
        winnericon = "&#x1f590;";
        updateLeaderboard();
        return "You lose! " + computerSelection + " beats " + playerSelection;
    }
    else if (computerSelection === "scissors" && playerSelection === "paper") {
        time = getCurrentTime();
        winner = "Computer"
        computerScore++;
        computerScoreEl.textContent = computerScore;
        winnericon = "&#x270c;";
        updateLeaderboard();
        return "You lose! " + computerSelection + " beats " + playerSelection;
    }
}

function getCurrentTime() {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    if (hours > 12) {
        return `${hours - 12}:${minutes} PM`;
    }
    else {
        return `${hours}:${minutes} AM`;
    }
} 
