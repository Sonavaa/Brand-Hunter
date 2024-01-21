"use strict";

const filterBtns = document.querySelectorAll(".filterBtn");
const filters = document.querySelectorAll(".filter");
const plusIcons = document.querySelectorAll(".plusIcon");
const categoryTypes = document.querySelectorAll(".categoryType");
const categoryBtns = document.querySelectorAll(".categoryBtn");
const chevronIcons = document.querySelectorAll(".chevronIcon");
const btns = document.querySelectorAll("button");
const firstBtn = document.getElementById("first");
const firstBtn_p = document.getElementById("first p");
const sort = document.getElementById("sıralama");



filterBtns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    filters[index].classList.toggle("hidden");
    filterBtns[index].classList.toggle("rounded-full");
    filterBtns[index].classList.toggle("rounded-t-full");

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

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("rounded-full");
    btn.classList.toggle("rounded-t-xl");
    btn.classList.toggle("rounded-b-none");
  });
});

firstBtn.addEventListener("click", () => {
  firstBtn.classList.toggle("rounded-full");
  firstBtn.classList.toggle("rounded-t-xl");
  firstBtn.classList.toggle("rounded-b-none");
  firstBtn.classList.toggle("bg-[#ffdcdc]");
  firstBtn.classList.toggle("bg-neutral-100");
});