// JavaScript variables can hold different data types:numbers, strings, objects and more:

let length = 16; // Number
let lastName = "Johnson"; // String
let x2 = { firstName: "John", lastName: "Doe" }; // Object
const cars = ["Saab", "Volvo", "BMW"]; //Array
let car; // Value is undefined, type is undefined

console.log(length);

// JavaScript has dynamic types. This means that the same variable can be used to hold different data types:
let x; // Now x is undefined
x = 5; // Now x is a Number
x = "John"; // Now x is a String

console.log(x);

// JavaScript Booleans
// Booleans can only have two values: true or false.

let x1 = 5;
let y = 5;
let z = 6;
console.log(x1 == z); // Returns false
console.log(x1 == y); // Returns true
// Booleans are often used in conditional testing.

// JavaScript Arrays
const Cars = ["Saab", "Volvo", "BMW"];
console.log(Cars)

// The typeof Operator
// You can use the JavaScript typeof operator to find the type of a JavaScript variable.

// The typeof operator returns the type of a variable or an expression:

console.log(typeof ""); // Returns "string"
console.log(typeof "John"); // Returns "string"
console.log(typeof "John Doe"); // Returns "string"
console.log(typeof function () {});
console.log(typeof 2);
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof {});
console.log(typeof Symbol());
console.log(typeof 1n);
console.log(typeof []);

// Undefined
// In JavaScript, a variable without a value, has the value undefined. The type is also undefined.
let car1; // Value is undefined, type is undefined

// Empty Values
// An empty value has nothing to do with undefined.

// An empty string has both a legal value and a type.
let car2 = ""; // The value is "", the typeof is "string"
