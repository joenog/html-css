// referencia para formulario
const frm = document.querySelector('form');
const res = document.querySelector('#res');
// ouvidor evneto acionado quando submit for clicado
frm.addEventListener('submit', enviar=> {
    enviar.preventDefault();
    // variaveis para receber e processar dados
    const produto = frm.inProduto.value;
    const valor = Number(frm.inValor.value);
    const pagar = ((valor * 3) - valor * 0.5);
    // inserção da saida dos dados
    res.innerHTML = `${produto} - 3 POR ${pagar.toFixed(2)} R$ <br>
    O tericeiro pela metade do preço: ${valor * 0.5.toFixed(2)} R$;`
})