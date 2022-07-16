const first = [1, 2, 3];
const second = [4, 5, 6];

// const combined = first.concat(second);
// const combined = [...first,'a',...second,'b'];

const clone = [...first];
console.log(first);
console.log(clone);
console.log(second);

const person = { name: "Serey" };
const work = { job: "Web Developer" };

const combined = { ...person, ...work, location: "Cambodia" };
console.log(combined);
