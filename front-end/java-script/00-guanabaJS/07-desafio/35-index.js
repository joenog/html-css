
// RECURSIVIDADE

function fatorial(n) {

    if (n == 1) {  // se o fatorial igual a 1
        return 1; // retorne 1
    }else {
        return n * fatorial(n-1) // se não for retorne o o numero inseriod vezes ele mesmo menos 1
    }
}

console.log(fatorial(3))