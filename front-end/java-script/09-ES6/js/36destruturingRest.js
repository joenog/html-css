// USANDO DESTRUTURING + OPERADOR REST
/*
let arr = [10,20,30,40,50,60,70];
let [a, ...resto] = arr;

console.log(a);
console.log(resto.join(', '))*/

// COM OBJETOS

let obj = {
    a: 10,
    b: 20,
    c: 30
};

let {a, ...rest} = obj;
console.log(a, rest);