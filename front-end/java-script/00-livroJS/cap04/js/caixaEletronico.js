let frm = document.querySelector("form");
let res100 = document.querySelector('#res100'); // resposta notas de 100
let res50 = document.querySelector('#res50'); // resposta notas de 50 
let res10 = document.querySelector('#res10'); // respostas notas de 10

frm.addEventListener('submit', e=> { // ouvidor parao botao submit
    e.preventDefault();  // previne o envio do formulario

    let saque = Number(frm.inSaque.value); // seleciona o valor digitado no form
    if (saque % 10 != 0 || saque >= 1000) { // condicao pra checar se o number é mutiplo de 100
        res100.innerHTML = `Saque indisponivel para as notas do caixa <br> (10, 50, 100)`
        res50.innerHTML = ''; // caso o saque n seja possivel limpe os campos 50 e 100
        res10.innerHTML = ''; // >
        frm.inSaque.focus(); //define focu no input de saque ja ao carregar a pagina
        return
    }
    // verificação de notas
    const notasCem = Math.floor(saque / 100); // calcula notas de 100
    let resto = saque % 100; // resto quanto sobra para pagar
    const notasCinque = Math.floor(resto / 50); // calcular o resto sobre 50
    resto = resto % 50; // quando ainda sobre
    const notasDez = Math.floor(resto / 10); // calcula notas de 10
    resto = resto % 10;

    if (notasCem > 0) {
        res100.innerHTML = ` ${notasCem} - Notas de 100 R$`;
    }
    if (notasCinque > 0) {
        res50.innerHTML = `${notasCinque} - Notas de 50 R$ `;
    }
    if (notasDez > 0) {
        res10.innerHTML = `${notasDez} - Notas de 10 R$;`
    }
})