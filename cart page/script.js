"use strict";
const increase_button = document.querySelectorAll(".increase");
const decrease_button = document.querySelectorAll(".decrease");
const counter_element = document.querySelectorAll(".counter");
const card = document.querySelector(".card");
let counter = 0;

increase_button.forEach((increase_btn) => {
  increase_btn.addEventListener("click", () => {
    counter++;
    counter_element.forEach((counterEl) => {
      counterEl.value = counter;
    });
  });
});

decrease_button.forEach((decrease_btn) => {
  decrease_btn.addEventListener("click", () => {
    counter--;
    if (counter === 0) {
      card.remove();
    } else {
      counter_element.forEach((counterEl) => {
        counterEl.value = counter;
      });
    }
  });
});
