/*function imcPessoa(peso, altura) {

    let imc = peso / altura ** 2 ; /// numa funcao faço a criação da logica 
    return imc; // e por fim faco a chaada para que haja terorno
    // então sempre que preisar ussa essa logica basta requisitar o nome da funcao
    //aq nesse caso imcPessoa()
    // com isso posso usar a mesma logica em varias partes do programa
}

let imc = imcPessoa(79.625, 1.75)

console.log(imc) */
/*
var serie = 'flash'

if (0 == 0) {
    console.log(serie);
}

function x() {
    console.log(serie + '2');
}
x() */

var showIMC = function(peso, altura) {
    var imc  = peso / altura ** 2
    console.log(imc.toFixed(2))
}

showIMC(75, 1.75)

