/*
let arr = [10, 20, 30, 40];

function imprimir([a, b, , d, e = 100]) {
    console.log(a, b, d, e);
}

imprimir(arr);*/

let obj = {
    a: 10,
    b: 20,
    c: 30,
    d: 44
};
// USEI UM FUNCÇÃO COM OBJETO DESETUTURADO E RENOMEAÇÃO DO ATRIBUTO DENTRO DO OBJETO A:PRIMEIRO
function imprimir({a:primeiro,  c, d, e = 100}) {
    console.log(primeiro,  c, d, e);
}
// CHAMO A FUNCAO IQUE IMPRIMIRA OQ FOI REQUERIDO AO OBJETO
imprimir(obj);