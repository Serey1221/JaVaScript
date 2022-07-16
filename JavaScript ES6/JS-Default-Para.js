function myfunction(x, y = 10) {
  // y is 10 if not passed or undefined
  return x + y;
}

console.log(myfunction(5));
