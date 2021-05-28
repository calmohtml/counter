"use strict";

const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");
const number = document.getElementById("display");
let counter = 0;

const sum = increase.addEventListener("click", () => {
  number.innerHTML = counter += 1;
  colorManager();
});

const min = decrease.addEventListener("click", () => {
  number.innerHTML = counter -= 1;
  colorManager();
});

const zero = reset.addEventListener("click", () => {
  number.innerHTML = counter = 0;
  colorManager();
});

const colorManager = () => {
  if (counter > 0) {
    number.classList.add("positive");
  } else if (counter < 0) {
    number.classList.add("negative");
  } else {
    number.classList.remove("positive");
    number.classList.remove("negative");
  }
};
