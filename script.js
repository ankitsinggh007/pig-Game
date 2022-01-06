"use strict";
// store element in variable
let btnroll = document.querySelector(".btn--roll");
let btnhold = document.querySelector(".btn--hold");
let btnnew = document.querySelector(".btn--new");
let current_1 = document.querySelector("#current--0");
let current_2 = document.querySelector("#current--1");
let player_1 = document.querySelector(".player--0");
let player_2 = document.querySelector(".player--1");
let highscore_1 = document.querySelector("#score--0");
let highscore_2 = document.querySelector("#score--1");
let dice = document.querySelector(".dice");
// function repeatedly used

btnroll.addEventListener("click", function () {
  let random_no = Math.trunc(Math.random() * 6) + 1;
  dice.src = `dice-${random_no}.png`;
  console.log(random_no);
  if (random_no == 1) {
    if (player_1.classList.contains("player--active")) {
      current_1.textContent = 0;
      player_2.classList.add("player--active");
      player_1.classList.remove("player--active");
    } else {
      current_2.textContent = 0;
      player_1.classList.add("player--active");
      player_2.classList.remove("player--active");
    }
  } else {
    if (player_1.classList.contains("player--active")) {
      current_1.textContent = Number(current_1.textContent) + random_no;
    } else {
      current_2.textContent = Number(current_2.textContent) + random_no;
    }
  }
});
btnhold.addEventListener("click", function () {
  if (player_1.classList.contains("player--active")) {
    highscore_1.textContent =
      Number(highscore_1.textContent) + Number(current_1.textContent);
    current_1.textContent = "0";
    player_1.classList.remove("player--active");
    player_2.classList.add("player--active");
  } else {
    highscore_2.textContent =
      Number(highscore_2.textContent) + Number(current_2.textContent);
    current_2.textContent = "0";
    player_2.classList.remove("player--active");
    player_1.classList.add("player--active");
  }
});
btnnew.addEventListener("click", function () {
  highscore_1.textContent = 0;
  highscore_2.textContent = 0;
  current_1.textContent = 0;
  current_2.textContent = 0;
  player_1.classList.add("player--active");
  player_2.classList.remove("player--active");
});
