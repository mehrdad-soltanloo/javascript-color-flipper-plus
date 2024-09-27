"use strict";
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.querySelector(".btn");
const colorCode = document.querySelector(".color-code");
const colorHistory = [];
const colorHistoryContainer = document.querySelector(".color-history");
const historyHeading = document.querySelector(".history-heading");

btn.addEventListener("click", () => {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }

  colorCode.textContent = hexColor;
  colorCode.style.borderBottom = `solid 5px ${hexColor}`;
  document.body.style.backgroundColor = hexColor;

  //   add the current color to the colorHistory array

  if (!colorHistory.includes(hexColor)) {
    colorHistory.push(hexColor);

    if (colorHistory.length > 3) {
      colorHistory.shift();
    }

    colorHistoryContainer.innerHTML = "";

    colorHistory.forEach((color) => {
      const span = document.createElement("span");
      span.textContent = color;

      span.style.fontSize = "1.4rem";
      span.style.letterSpacing = "1px";
      span.style.padding = "10px 20px";
      span.style.margin = "5px";
      span.style.borderBottomColor = color;
      span.style.borderBottomStyle = "solid";
      span.style.borderBottomWidth = "20px";
      colorHistoryContainer.appendChild(span);
    });

    console.log(colorHistory);
  }
});

const getRandomNumber = () => {
  const randomNumber = Math.floor(Math.random() * 16);
  return randomNumber;
};
