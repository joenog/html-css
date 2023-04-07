/*
let idade1 = 5
let idade2 = 3
let idade3 = 8;
let maior = [];
let res = 0;

if (idade1 > idade2 || idade1 > idade3) {
    maior.push(idade1)
}
if (idade2 > idade1 || idade2 > idade3) {
    maior.push(idade2)   
}
if (idade3 > idade2 || idade3 > idade2) {
    maior.push(idade3)
} 

for (let i = 0; i < maior.length; i++)

res += maior[i]
console.log(res) 
*/
/*
let id1 = 70;
let id2 = 24;
let id3 = 8;

let valores = [id1, id2, id3];
valores.sort(function(a,b) {return b - a});

let res = valores[0] + valores[1];
console.log(res)
*/

let id1 = 10;
let id2 = 24;
let id3 = 8;


let res = id1 + id2 + id3- Math.min(id1, id2, id3);
console.log(res)
