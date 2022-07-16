# Arrow Functions

Arrow functions allows a short syntax for writing function expressions.

You don't need the function keyword, the return keyword, and the curly brackets.

```js
Example;
// ES5
var x = function (x, y) {
  return x * y;
};

// ES6
const x = (x, y) => x * y;
```

Arrow functions do not have their own `this`. They are not well suited for defining `object methods`.

Arrow functions are not hoisted. They must be defined `before` they are used.

Using `const` is safer than using `var`, because a function expression is always a constant value.

You can only omit the `return` keyword and the curly brackets if the function is a single statement. Because of this, it might be a good habit to always keep them:

Example

```js
const x = (x, y) => {
  return x * y;
};
```
# The For/Of Loop
The JavaScript `for/of` statement loops through the values of an iterable objects.

`for/of` lets you loop over data structures that are iterable such as Arrays, Strings, Maps, NodeLists, and more.

The `for/of` loop has the following syntax:
```js
for (variable of iterable) {
  // code block to be executed
}
```
variable - For every iteration the value of the next property is assigned to the variable. Variable can be declared with const, let, or var.

iterable - An object that has iterable properties.

## Looping over an Array
```js
Example

const cars = ["BMW", "Volvo", "Mini"];
let text = "";

for (let x of cars) {
  text += x + " ";
}
```