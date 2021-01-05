"use strict";

let currentScore = 20;
let highScore = 0;
let answer;

function setMessage(message) {
  document.querySelector(".message").textContent = message;
}

function setScore() {
  document.querySelector(".score").textContent = currentScore;
}

function startGame() {
  answer = Math.floor(Math.random() * 20) + 1;
  console.log("answer is:", answer);
  currentScore = 20;

  setScore();
  document.querySelector(".guess").value = "";
  document.body.style.background = "#222";

  document.querySelector(".highscore").textContent = highScore;
  document.querySelector(".check").disabled = false;
  setMessage("Start Guessing...");
}

function check() {
  console.log("checking...");
  let myguess = document.querySelector(".guess").value;
  if (myguess === "") {
    setMessage("no number entered");
  } else if (Number(myguess) === NaN) {
    setMessage("invalid input");
  } else if (Number(myguess) === answer) {
    win();
  } else {
    notWin(Number(myguess));
  }
}

function win() {
  highScore = currentScore > highScore ? currentScore : highScore;
  document.body.style.background = "green";
  document.querySelector(".check").disabled = true;
  setMessage("You Win");
}

function notWin(num) {
  if (num < answer) {
    setMessage("Too Small");
  } else {
    setMessage("Too Large");
  }
  currentScore = Math.max(0, currentScore - 1);
  setScore();
}

function again() {
  startGame();
}

document.querySelector(".check").addEventListener("click", check);
document.querySelector(".again").addEventListener("click", again);
startGame();
