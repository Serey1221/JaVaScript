// Let
// Cannot be Redeclared
// Variables defined with let cannot be redeclared.
// You cannot accidentally redeclare a variable.

let x = "Serey";
// let x = 2;
// SyntaxError: 'x' has already been declared
{
  let x = 5; // Allowed
}

// With let you can not do this:
var w = "serey";
var w = 9;

//const
// Variables defined with const cannot be Redeclared.

// Variables defined with const cannot be Reassigned.

// Variables defined with const have Block Scope.
// JavaScript const variables must be assigned a value when they are declared:

// Constant Objects and Arrays
// Constant Arrays
// You can change the elements of a constant array:

// Example
// You can create a constant array:
const cars = ["Saab", "Volvo", "BMW"];

// You can change an element:
cars[0] = "Toyota";

// You can add an element:
cars.push("Audi");
console.log(cars);
//====================================================
// onstant Objects
// You can change the properties of a constant object:

// Example
// You can create a const object:
const car = { type: "Fiat", model: "500", color: "white" };

// You can change a property:
car.color = "red";

// You can add a property:
car.owner = "Johnson";
console.log(car);
