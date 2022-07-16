// const person = {
//   name: "serey",
//   walk() {
//     console.log("walk");
//   },
// };

class Person {
  constructor(name) {
    this.name = name;
  }
  walk() {
    console.log("walk");
  }
}
const person = new Person("Serey");

// JavaScript Classes are templates for JavaScript Objects.

// Use the keyword class to create a class.

// Always add a method named constructor():

// Syntax //
// class ClassName {
//   constructor() { ... }
// }

//JS Class Inheritance Static...
class Car {
  constructor(brand, name, year) {
    this.name = name;
    this.year = year;
    this.carname = brand;
  }
  age() {
    let date = new Date();
    return date.getFullYear() - this.year;
  }
  present() {
    return "I have a " + this.carname;
  }
}
class Model extends Car {
  constructor(brand, mod) {
    super(brand);
    this.Model = mod;
  }
  show() {
    return this.present() + ",it is a " + this.Model;
  }
}

const mycar = new Model("Ford", "Mustang");

console.log(mycar.show());
