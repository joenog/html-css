// referencia com o formulario
const form = document.querySelector('form');
const res = document.querySelector('#res');
//ouvidor acionador pelo submit
form.addEventListener('submit', enviar=> {
    enviar.preventDefault();
    const medic = form.inMedic.value;
    const valor = parseFloat(form.inValor.value);
    //condicao para promocao
    if (valor % 1 == 0) { // verifico se o resto da divisao da 0 se sim o numer é par e inteiro
        alert('Não houve centavos, sem descontos :D')
    } else {
        const valor2 = valor * 2;
        res.innerHTML = `Comprando 2 ${medic} - ${valor2} R$ <br>`
        let desconto = Math.floor(valor2);
        res.innerHTML += `Com Promoção <mark> ${desconto.toFixed(2)}  <mark> R$`
    }
})