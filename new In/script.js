"use strict";

const filterBtns = document.querySelectorAll(".filterBtn");
const filters = document.querySelectorAll(".filter");
const plusIcons = document.querySelectorAll(".plusIcon");
const categoryTypes = document.querySelectorAll(".categoryType");
const categoryBtns = document.querySelectorAll(".categoryBtn");
const chevronIcons = document.querySelectorAll(".chevronIcon");

filterBtns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    filters[index].classList.toggle("hidden");
    filterBtns[index].classList.toggle("rounded-b");

    if (plusIcons[index].innerHTML === "-") {
      plusIcons[index].innerHTML = "+";
    } else {
      plusIcons[index].innerHTML = "-";
    }
  });
});

categoryBtns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    categoryTypes[index].classList.toggle("hidden");
    chevronIcons[index].classList.toggle("-rotate-180");
  });
});
