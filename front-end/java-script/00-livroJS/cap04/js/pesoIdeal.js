//referenia com o formulario
const frm = document.querySelector('form');
const res = document.querySelector('#res');
/// cirando ouvidor para btn submit
frm.addEventListener('submit', e=> {
    e.preventDefault();
    //obter vslores do formulario
    const nome = frm.inNome.value;
    const masc = frm.inMas.checked; // ja define algo checado
    const altura= Number(frm.inAltura.value);
    let peso; // variavel vazia para receber a resposta depois na condicao
    //condicao para checar sexo e fazer calculo correto
    if (masc) { // se o sexo masc for true
        peso = 22 * Math.pow(altura, 2);
    } else { /// se n for true será feminino
        peso = 21 * Math.pow(altura, 2);
    }
    //saida de dados
    res.innerHTML = `${nome} seu peso ideal: ${peso.toFixed(2)}`
}) // ouvinte para botao reset limpar formulario
frm.addEventListener('reset', ()=> {
    res.innerHTML = 'Resposta...';
})