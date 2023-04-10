
function somar(a, b) {  // funcao somar que recebe dois parametros
    let soma = a + b;   // variavel somar que recebe a soma dos dois paramentros
    return soma;    // retorno da soma
}

function resposta(resp) {    // funcao resposta com parametro  resp
    return console.log(resp) // retorno de um console.log coo parametro resp
}

let soma = somar(55,5)  // variavel recbendo a funcao soma com os dois parametros em numeros
resposta(soma)  // chamada da funcao resposta com o parametro da varivel que recebe a funcao somar 