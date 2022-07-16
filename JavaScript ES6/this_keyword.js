const person = {
  firstName: "Serey",
  walk() {
    console.log(this);
  },
};

person.walk();

const walk = person.walk.bind(person);
walk();
