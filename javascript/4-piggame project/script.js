"use strict";
const score = [0, 0];
const player0el = document.querySelector(".player--0");
const player1el = document.querySelector(".player--1");
const diceel = document.querySelector(".dice");
const score0 = document.querySelector("#score--0");
const score1 = document.getElementById("score--1");
const btnroll = document.querySelector(".btn--roll");
const btnnew = document.querySelector(".btn--new");
const btnhold = document.querySelector(".btn--hold");
const score2 = document.querySelector("#current--0");
const score3 = document.querySelector("#current--1");
let playing = true;
const switchplayer = function () {
  currentscore = 0;
  document.getElementById(`current--${activeplayer}`).textContent =
    currentscore;
  activeplayer = activeplayer === 0 ? 1 : 0;
  // toggle =>it will remove player--active class if it is present or it will add player--active call if it is not present;
  player0el.classList.toggle("player--active");
  player1el.classList.toggle("player--active");
};
let currentscore = 0;
let activeplayer = 0;
score0.textContent = 0;
score1.textContent = 0;
diceel.classList.add("hidden");
btnroll.addEventListener("click", function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    diceel.src = `dice-${dice}.png`;
    diceel.classList.remove("hidden");
    if (dice !== 1) {
      currentscore += dice;
      document.getElementById(`current--${activeplayer}`).textContent =
        currentscore;
    } else {
      switchplayer();
    }
  }
});
btnhold.addEventListener("click", function () {
  if (playing) {
    score[activeplayer] += currentscore;
    document.getElementById(`score--${activeplayer}`).textContent =
      score[activeplayer];
    if (score[activeplayer] >= 100) {
      // btnhold.disabled = true;
      // btnroll.disabled = true;
      document.querySelector(`#name--${activeplayer}`).textContent =
        "Congratulations! You Won😎";
      playing = false;
      document
        .querySelector(`.player--${activeplayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activeplayer}`)
        .classList.remove("player--active");
      diceel.classList.add("hidden");
    } else {
      switchplayer();
    }
  }
});
btnnew.addEventListener("click", function () {
  playing = true;
  currentscore = 0;
  score[0] = 0;
  score[1] = 0;
  document.querySelector(`#name--${activeplayer}`).textContent = `PLAYER ${
    activeplayer + 1
  }`;
  document
    .querySelector(`.player--${activeplayer}`)
    .classList.remove("player--winner");
  document
    .querySelector(`.player--${activeplayer}`)
    .classList.remove("player--active");
  document.querySelector(`.player--0`).classList.add("player--active");
  score2.textContent = 0;
  score3.textContent = 0;
  score0.textContent = 0;
  score1.textContent = 0;
  activeplayer = 0;
  // btnhold.disabled = false;
  // btnroll.disabled = false;
});
