//looping over an array
const cars = ["BMW", "Volvo", "Mini"];

let text = "";
for (let x of cars) {
  text += x + "<br>";
}
console.log(text);

//looping over a string
let language = "JavaScript";

let char = "";
for (let x of language) {
  char += x + "<br>";
}
console.log(char);
