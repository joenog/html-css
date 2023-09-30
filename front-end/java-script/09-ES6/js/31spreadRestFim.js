/* Exemplo de Espalhamento (Spread): */
/*
function elementos(a,b,c) {
    console.log(a,b,c);
}

const meuArray = [1,2,3];
elementos(...meuArray) //  Spread passado para separa os elementos do array*/


/* Exemplo de Coleta (Rest): */

function coletar(...args) { // rest passado para unir argumetnos que serão passado
    console.log(args)
}

coletar(1,2,3,4,5,6); 
// AQUI foi defino no argumento da função o rest para que una os elementos passados na chamada da função