//criada referencia com formulario
const frm = document.querySelector('form');
const res = document.querySelector('#res');
// ouvidor para click do btn submit
frm.addEventListener('submit', e=> {
    e.preventDefault();
    //variaveis para receber valor digitador no forulario
    const nome = frm.inNome.value;
    const nota1 = Number(frm.nota1.value);
    const nota2 = Number(frm.nota2.value);
    let resp = '';  // usei let para o vlaor poder ser modificado futurament
    //condicionas para checar a media
    if (!nota1 || !nota2) {
        alert('Preencha os campos!');
        return; // serve para interromer a execução caso if for verdadeiro
    }
    const media = (nota1 + nota2) / 2;
    if (media < 5) {
        resp = 'REPROVADO, infelizmente!';
        res.style.background = 'red';
    } else if (media <= 7) {
        resp = 'AVALIAÇÃO, você pode fazer outra prova!'
        res.style.background = 'yellow';
    } else {
        resp = 'APROVADO, tenha ótimas férias';
        res.style.background = 'lightblue';
    }
    //saida de dados - exibir resposta
    res.innerHTML = `NOTA: ${media.toFixed(1)},${nome} ${resp}`;
    res.style.fontWeight = 'bold';
})