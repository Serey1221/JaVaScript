const previous = document.querySelector("#data-previous-operand");
const current = document.querySelector("#data-current-operand");
const operations = document.querySelectorAll("#data-operation");
const numbers = document.querySelectorAll("#data-number");
const AllClear = document.querySelector("#data-all-clear");
const delete1 = document.querySelector("#data-delete");
const equals = document.querySelector("#data-equals");
const results = document.querySelector(".data-result");

let pre = ""; //dis1
let curr = ""; //dis2
let result = null;
let lastOperation = "";
let haveDot = false;

numbers.forEach((number) => {
  number.addEventListener("click", (e) => {
    if (e.target.innerText === "." && !haveDot) {
      haveDot = true;
    } else if (e.target.innerText === "." && haveDot) {
      return;
    }
    curr += e.target.innerText;
    current.innerText = pre;
  });
});
operations.forEach((operation) => {
  operation.addEventListener("click", (e) => {
    if (!curr) return;
    haveDot = false;
    const operationName = e.target.innerText;
    if (pre && curr && lastOperation) {
      mathOperation();
    } else {
      result = parseFloat(curr);
    }
    clearVar(operationName);
    lastOperation = operationName;
    console.log(result);
  });
});

function clearVar(name = "") {
  pre += curr + " " + name + " ";
  previous.innerText = pre;
  previous.innerText = "";
  curr = "";
  results.innerText = result;
}
function mathOperation() {
  if (lastOperation === "&times;") {
    result = parseFloat(result) * parseFloat(curr);
  } else if (lastOperation === "+") {
    result = parseFloat(result) + parseFloat(curr);
  } else if (lastOperation === "-") {
    result = parseFloat(result) - parseFloat(curr);
  } else if (lastOperation === "/") {
    result = parseFloat(result) / parseFloat(curr);
  } else if (lastOperation === "%") {
    result = parseFloat(result) % parseFloat(curr);
  }
}
