// The Object.entries() method returns an array of a given object's own enumerable string-keyed property [key, value] pairs. 

const Cars=["BMW","TOYOTA","VOLVO","Ford"];
const car=Cars.entries();

for(let x of car){
    console.log(x)
}

const obj={
    name:"Serey",
    age:21
};
console.log(Object.entries(obj))