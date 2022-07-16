//Using Symbol() to create a unique identifiers, solves this problem:
const person = {
  firstName: "Serey",
  lastName: "Sruot",
  age: 21,
};

let id = Symbol("id");
person[id] = 1021021;
console.log(person.id);
// Now person[id] = 1021021
// but person.id is still undefined


//Symbols are always unique.

//If you create two symbols with the same description they will have different values.

Symbol("id") == Symbol("id") // false