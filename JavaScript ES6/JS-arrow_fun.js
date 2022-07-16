//ES5
// const square = function(Number){
//     return Number * Number;
// };
// console.log(square(6));

//Arrow function (ES6)
//You don't need the function keyword, the return keyword, and the curly brackets.
const square = (Number) => Number * Number;
console.log(square(5));

const x = (x, y) => x * y;
console.log(x(5, 7));

const a = (a, b) => {
  return a * b;
};console.log(a(6,5))
// const jobs = [
//   { id: 1, isActive: ture },
//   { id: 2, isActive: ture },
//   { id: 3, isActive: false },
// ];
// const activejobs = jobs.filter(function (job) {
//   return job.isActive;
// });
// const activejobs = jobs.filter((job) => job.isActive);

