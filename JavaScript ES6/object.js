const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",

  walk() {},
  talk() {},
};

person.talk();
person.lastName = "";
console.log(person);
