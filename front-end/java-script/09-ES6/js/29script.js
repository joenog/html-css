let anima = {attr1: 'a'};
let vertebrado = {__proto__: anima, attr2: 'b'};
let ave = {__proto__: vertebrado, attr3: 'c'};

console.log(ave.attr3, ave.attr2, ave.attr1)
