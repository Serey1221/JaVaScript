const hexadecimal = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  let StarColor = "#";
  for (let i = 0; i < 6; i++) {
    StarColor += hexadecimal[getRandomNumber()];
  }
  color.textContent = StarColor;
  document.body.style.backgroundColor = StarColor;
});
function getRandomNumber() {
  return Math.floor(Math.random() * hexadecimal.length);
}
