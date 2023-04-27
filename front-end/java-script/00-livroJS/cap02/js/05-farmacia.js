// referencia com o formulario
const form = document.querySelector('form');
const res = document.querySelector('#res');
//ouvidor acionador pelo submit
form.addEventListener('submit', enviar=> {
    enviar.preventDefault();
    const medic = form.inMedic.value; // nome medicamento
    const valor = parseFloat(form.inValor.value); // valor do medicamento
    //condicao para promocao
    if (valor % 1 == 0) { // verifico se o resto da divisao da 0 se sim o numer é par e inteiro
        alert('Não houve centavos, sem descontos :D')
    } else {
        let desconto = Math.floor(valor * 2);
        let cent = valor % 1;
        res.innerHTML = `Comprando 2 ${medic} - ${valor * 2} R$ <br>
        Com Promoção <mark> ${desconto.toFixed(2)}</mark> <br>
        Teve um descont de ${cent.toFixed(2)}
        `
    }
})