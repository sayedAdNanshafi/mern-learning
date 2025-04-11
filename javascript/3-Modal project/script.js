"use strict";
// important🔥🔥🛑🛑🛑💖💖;
// if we use querySelector for selecting multiple elements with same class it will select only first element therefore we use querySelectorAll🔥🔥;
const btnsshowmodal = document.querySelectorAll(".show-modal");
const btnclosemodal = document.querySelector(".close-modal");
// node list of element for all practical purposes behaves as an array;
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const closemodal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
const showmodal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
for (let i = 0; i < btnsshowmodal.length; i++) {
  btnsshowmodal[i].addEventListener("click", showmodal);
}
btnclosemodal.addEventListener("click", closemodal);
overlay.addEventListener("click", closemodal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closemodal();
  }
});
