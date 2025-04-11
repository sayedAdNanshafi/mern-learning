"use strict";
// DOM manipulation🔥🔥;
// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "🔥🔥correct number!";
// document.querySelector(".number").textContent = "🔥🔥";
// document.querySelector(".score").textContent = "10";
// document.querySelector(".guess").value = 44;
// console.log(document.querySelector(".guess").value);
let secretnumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displaymessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  let guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    // document.querySelector(".message").textContent = "⛔ No Number";
    displaymessage("⛔ No Number");
  } else if (guess === secretnumber) {
    // document.querySelector(".message").textContent = "🔥🔥correct number!";
    displaymessage("🔥🔥correct number!");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secretnumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== secretnumber) {
    if (score > 1) {
      // document.querySelector(".message").textContent =
      //   guess > secretnumber ? "🛑too high" : "🚫too low";
      displaymessage(guess > secretnumber ? "🛑too high" : "🚫too low");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      // document.querySelector(".message").textContent = "😭you lost the game";
      displaymessage("😭you lost the game");
      document.querySelector(".score").textContent = 0;
    }
  }
  //  else if (guess > secretnumber) {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = "🛑too high";
  //     // document.querySelector(".score").textContent =
  //     //   Number(document.querySelector(".score").textContent) - 1;
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent = "😭you lost the game";
  //     document.querySelector(".score").textContent = 0;
  //   }
  // } else if (guess < secretnumber) {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = "🚫too low";
  //     // document.querySelector(".score").textContent =
  //     //   Number(document.querySelector(".score").textContent) - 1;
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent = "😭you lost the game";
  //     document.querySelector(".score").textContent = 0;
  //   }
  // }
});
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  // let guess = Number(document.querySelector(".guess").value);
  document.querySelector(".score").textContent = score;
  secretnumber = Math.trunc(Math.random() * 20) + 1;
  // document.querySelector(".message").textContent = "Start guessing...";
  displaymessage("Start guessing...");
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
