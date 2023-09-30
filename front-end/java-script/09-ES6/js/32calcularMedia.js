// CACULAR MEDIA DE NUMEROS
/* Crie uma função chamada calcularMedia que aceita um número variável de argumentos (números) e retorna a média dos números fornecidos. */

/*
function calcNum(divisor, ...args) {
    let i = 0;
    args.forEach(v => i += v);
    let result = i / divisor;
    console.log(result.toFixed(2));
}

calcNum(3 ,6,6,6.55); */

function calcNum(divisor, ...args) {
    // REDUCE USADO PARA SOMAR TODOS OS NUMEROS DE UM ARRAY - DEVINA CONTADOR INICIADO EM 0
    const soma = args.reduce((acumulador, valor) => acumulador + valor, 0);
    const media = soma / divisor;
    return console.log(media.toFixed(2));
}

calcNum( 3,6,6,6.65);