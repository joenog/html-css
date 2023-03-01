function gerar() {

    let res = document.querySelector('#seltab');  // puxei o item selec
    let num = document.querySelector('#txtn'); // puxei do html a caixa de digitacao
    
    if (num.value.length == 0) {
        alert('Por favor digite um numero !'); // crirei um alertar caso nada seja digitado
    }
    else {
        let n = Number(num.value);  // cnvetiri  o vlor digitado em num
        let c = 0; // criei uma variavei para que o program tenha um inu

        res.innerHTML = '' // limpar tabuanda antes que o calculo seja feito

        while (c <= 10) {  // enquanto o numero digitador for menor q 10 ele será mutiplicado pelo ocntado
            let item = document.createElement('option');  //criei um elemento selec
            item.text = `${n} x ${c} : ${n*c}`; // inseri no option o texto do calculo que será feito
            item.value = `${c}`;
            res.appendChild(item); // adicionei ao option o select cirado
            c++; // incremenando 1 ao contador c
        }
    }
}