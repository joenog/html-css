//OBTENDO FORMULARI OE RESPOSTA
const frm = document.querySelector('form');
const res = document.querySelector('#res');
//CONTADOR ERROS E CHANCES
erros = 0;
chances = 5;
//NUMERO GERADO ALEATORIOAMENTE
const numRandom = Math.round(Math.random() * 5);
//ADICIONADO OUVIDO AOS SUBMIT DO FORMULARIO
frm.addEventListener('submit', (e) => {
    e.preventDefault(); // etiva o envio do formulario
    //OBETNHO DIV PARA MOSTRAR NUMERO DE ERROS E CHANCES
    let numErros = document.querySelector('#erros');
    let numChances = document.querySelector('#chances')
    //NUMERO RANDOMICO QUE DEVERÁ SER ACERTADO PELO USUARIO
    const num = Number(frm.num.value);
    //CONDICIONAL SE O NUMERO FOR MENOR Q 0 OU MAIOR Q SEMM MOSTRAR ALETA
    if(num <= 0 || num > 100) {
        alert(`Digite um numero entre 0 e 100!`);
    } else {
        //SE NUM FOR RUAM NUMER ORANDOMICO GERADO MOSTRAR ACERTO     
        if(num === numRandom) {
            res.innerHTML = `Parabens ${num} Você acertou!`
            res.style.color = 'green';
        } else {
            //SE NUERO N FOR IGUAL GERADO MOSTRAR ERRO
            res.innerHTML = `Errou tente outra vez!`
            res.style.color = 'darkred';
            erros++; // CASO ERRO NUMERO DE ERROS É ITERADO
            chances--; // CASAO ERR NUMERO DE ACERTO E DECREMENTADO
            numErros.innerHTML = `${erros}` // IMPRIMIME NUMERO DE ERROS E ACERTO
            numChances.innerHTML = `${chances}`
            // SE CHANCES DOR IGUAL A IMPEDIR QUE JOGUE MAIS E RECARREGAR A PAGINA
            if(chances === 0) {
                alert('Não há mais chances');
                document.location.reload();
            }
            return;
        }
    }
})
