class Calculator {
  constructor(previous, current) {
    this.previous = previous;
    this.current = current;
    this.clear();
  }

  clear() {
    this.currentOperand = "";
    this.previousOperand = "";
    this.operation = undefined;
  }
  delete() {}
  appendNumber(number) {
    if (number === "." && this.currentOperand.includes(".")) return;
    this.currentOperand = this.currentOperand.toString() + number.toString();
  }
  chooseOperation(operation) {
    if (this.current === "") return;
    if (this.previous !== "") {
      this.compute();
    }
    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand = "";
  }
  compute() {
    let computation;
    const prev = parseFloat(this.previousOperand);
    const current = parseFloat(this.currentOperand);
    if (isNaN(prev) || isNaN(current)) return;
    switch (this.operation) {
      case "+":
        computation = prev + current;
        break;
      case "-":
        computation = prev - current;
        break;
      case "*":
        computation = prev * current;
        break;
      case "÷":
        computation = prev / current;
        break;
      default:
        return;
    }
  }
  getDisplay() {}
  updateDisplay() {}
}

const previous = document.querySelector("data-previous-operand");
const current = document.querySelector("data-current-operand");
const operations = document.querySelectorAll("data-operation");
const numbers = document.querySelectorAll("data-number");
const AllClear = document.querySelector("data-all-clear");
const delete1 = document.querySelector("data-delete");
const equals = document.querySelector("data-equals");

const cal = new Calculator(previous, current);

numbers.forEach((button) => {
  button.addEventListener("click", () => {
    cal.appendNumber(button.innerText);
  });
});
operations.forEach((button) => {
  button.addEventListener("click", () => {
    cal.chooseOperation(button.innerText);
  });
});
