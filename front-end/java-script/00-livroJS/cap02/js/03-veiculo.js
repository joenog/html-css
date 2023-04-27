// criar referencia com formulario
const form = document.querySelector('form');
const res = document.querySelector('#res');

//evento com funcao para submit
form.addEventListener('submit', enviar => {
    enviar.preventDefault(); // envito que o form seja enviado
    // variaveis para armagenar valores obtidos
    const carro = form.inCarro.value;
    const preco = form.pCarro.value;
    const entrada = preco * 0.50; // preço * metade dele mesmo
    const prazo = entrada / 12; // parcelas preco vezes metade dele mesmo dividdo por 12
    const juros = (entrada / 24) * 1.05;
    // impresssão das repostas
    res.innerHTML = `
    Modelo: ${carro} <br>
    Preço: ${preco} <br>
    Entrada: ${entrada.toFixed(2)} <br>
    À prazo 12x: ${prazo.toFixed(2)} - sem juros <br>
    À prazo 24x: ${juros.toFixed(2)} - com juros 
    `
})