//Variables are containers for storing data (storing data values)

//// var = function
function sayHello() {
  for (var i = 0; i < 5; i++) {
    console.log(i);
  }
  console.log(i);
}
sayHello();
//-------------
//// let = block scope
function sayHello() {
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
  console.log(i);
}
sayHello();

//// const = block
const x = 2;
x = 3;
var x = 10;
{
  const x = 2;
}
console.log(x);
x = 10;
