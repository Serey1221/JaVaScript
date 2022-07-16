////Pass an Array to the new Set()
//Create a Set
const letters = new Set(["a", "b", "c","d"]);

console.log(letters.size)
//Create a Set and add literal values:
//Create a Set
const letters1 = new Set();

//Add Values to the Set
letters1.add("a");
letters1.add("b");
letters1.add("c");
console.log(letters1.size);

////Create a Set and add variables
// Create Variables
const a = "a";
const b = "b";
const c = "c";
const d = "d";
// Create a Set
const letters2 = new Set();

// Add Variables to the Set
letters2.add(a);
letters2.add(b);
letters2.add(c);
letters2.add(d);
console.log(letters2.size);
//size is Returns the number elements in a Set