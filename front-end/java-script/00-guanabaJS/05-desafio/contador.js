
function contar() { 

    let inicio = document.querySelector('#ini');
    let fimm = document.querySelector('#fim');
    let passo = document.querySelector('#pas');
    let res =  document.querySelector('#res');

    if (inicio.value.length == 0 || fimm.value.length == 0 || passo.value.length == 0) {
        alert('ERRO!  Preencha corretamente!');
        res.innerHTML = `Impossivel contar!`
    } else {
        res.innerHTML = 'Contando: '
        let ini = Number(inicio.value);
        let fim = Number(fimm.value);
        let pas = Number(passo.value);
        //CONTAGEM CRESCENTE
        if (ini < fim) {
            for (let cont = ini; cont <= fim; cont += pas) {
                res.innerHTML += `${cont}` + '\u{1f449}';
            }
        // CONTAGEM DECRESCENTE
        } else {
            for (let cont = ini; cont >= fim; cont -= pas) {
                res.innerHTML += `${cont}`  + '\u{1f449}';
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}
