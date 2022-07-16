function sum(...args){
    let sum=0;
    for(let arg of args)sum+=arg;
    return sum;
}
let x=sum(4,5,3,6,22,78,90,123,456);
console.log(x);