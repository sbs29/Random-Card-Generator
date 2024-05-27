/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  const suit = Math.floor(Math.random() * 4 + 1);
  const value = Math.floor(Math.random() * 12 + 1);
  const suitElementUP = document.querySelector(".iconUp");
  const valueElement = document.querySelector(".value");
  const suitElementDown = document.querySelector(".iconDown");

  if (suit == 1) {
    suitElementUP.innerHTML = "♠";
    suitElementUP.classList.add("spade");
    valueElement.classList.add("spade");
    suitElementDown.innerHTML = "♠";
    suitElementDown.classList.add("spade");
  } else if (suit == 2) {
    suitElementUP.innerHTML = "♣";
    suitElementUP.classList.add("club");
    valueElement.classList.add("club");
    suitElementDown.innerHTML = "♣";
    suitElementDown.classList.add("club");
  } else if (suit == 3) {
    suitElementUP.innerHTML = "♥";
    suitElementUP.classList.add("heart");
    valueElement.classList.add("heart");
    suitElementDown.innerHTML = "♥";
    suitElementDown.classList.add("heart");
  } else if (suit == 4) {
    suitElementUP.innerHTML = "♦";
    suitElementUP.classList.add("diamond");
    valueElement.classList.add("diamond");
    suitElementDown.innerHTML = "♦";
    suitElementDown.classList.add("diamond");
  }
  if (value == 1) {
    valueElement.innerHTML = "A";
  } else if (value == 10) {
    valueElement.innerHTML = "J";
  } else if (value == 11) {
    valueElement.innerHTML = "Q";
  } else if (value == 12) {
    valueElement.innerHTML = "K";
  } else {
    valueElement.innerHTML = value;
  }
};
const buttonRandom = document.querySelector("button");
buttonRandom.addEventListener("click", reloadPage);

function reloadPage() {
  location.reload();
}
