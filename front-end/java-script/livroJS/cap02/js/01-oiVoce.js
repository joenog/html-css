const frm = document.querySelector('form');
const res = document.querySelector('#res');

frm.addEventListener('submit', (e) => {
    const nome = frm.nome.value; // const nome recebe o formulario e o item nome dele
    res.innerHTML = `Oi tudo bem, ${nome}?` // escrevo na res 
    e.preventDefault(); // previso que o nome seja enviado por formulario
})
