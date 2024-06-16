/* eslint-disable */
import "bootstrap";
import "./style.css";

function randomIndex(arr) {
  return Math.floor(Math.random() * arr.length);
}

function randomItem(arr) {
  const index = randomIndex(arr);
  return arr[index];
}

function playerCard() {
  const cardValues = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  const cardSuits = ["♠", "♣", "♦", "♥"];

  const value = randomItem(cardValues);
  const suit = randomItem(cardSuits);

  const suitColor =
    suit === "♠" || suit === "♣" ? "text-black" : "text-red-500";

  const cardHTML = `<div class="relative flex h-[350px] w-[250px] bg-center items-center justify-center rounded-xl bg-white shadow-xl duration-200 dark:bg-slate-100">
  <div class="text-7xl text-black">${value}</div>
  <div class="absolute left-4 top-4 flex flex-col items-center text-5xl">
    <div class="${suitColor}">${suit}</div>
    <div>${value}</div>
  </div>

  <div class="absolute bottom-4 right-4 flex flex-col items-center text-5xl text-black">
    <div class="${suitColor}">${suit}</div>
    <div>${value}</div>
  </div>

</div>`;

  const d = document.createElement("div");
  d.className = "w-20";
  d.innerHTML = cardHTML;
  document.querySelector(".card").appendChild(d);
}

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");

  playerCard();
};
