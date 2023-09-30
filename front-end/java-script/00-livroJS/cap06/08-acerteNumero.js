const frm = document.querySelector('form'); //OBTENHO ITENS DO FORMULARIO
const respErros = document.querySelector('#outErros'); // OBTER DIV PARA ERROS
const respChances = document.querySelector('#outChances'); // OBTER NUM DE CHANCES
const outDica = document.querySelector('#outDica'); // MOSTRAR DICA E RESPOSTA 
const btNovo = document.querySelector('#btNovo');

const erros = []; // ARRAY VAZIA ARA ARMAGENA NUMERO JA TESTADOS
const sorteado = Math.floor(Math.random() * 100) + 1; // CRIO NUMERO RANDOMICO 
const CHANCES = 6; // ONTADOR PARA NUMERO DE CHANCES

frm.addEventListener('submit', (e)=> { 
    e.preventDefault();  // PREVINO NUMER ODO ENVIO DE FORMULARIO

    const numero = parseInt(frm.inNumero.value); // OBTENHO DO FORMULARIO O NUMERO DIGITADO
    if(numero === sorteado) { // CONDICIONAL CASO NUMERO DIGITADO SEJA IGUAL NUMERO SORTEADO
        outDica.innerHTML = ` Numero: ${numero} - Parabens!!`; // EXIBO MENSAGEM DE PARABENS NO OUTPUT DICAS
        outDica.style.color = 'green' // MUDO COR DOS PARABENS PARA VERDES
        frm.btSubmit.disabled = true; // DESABILITO BOTÃ DE ENVIO DE NUMEROS CASO TENHA ACERTADO JA
        frm.btNovo.className = 'exibe';
    }
    else { // SE NÃO ACERTAR VERIFICO SE O ARRAU NUMERO JA INCLUI O NUMERO DIGITADO
        if(erros.includes(numero)) {  // SE INCLUIR MOSTR LERTA NUMER OJA INSERIDO
            alert(`Você ja apostou o numero: ${numero}, tente outro...`)
        } else { 
            // SE N TIVER DIGITADO PUSH ESSE NUEMRO DGITADO E ARMAZENO NO ARRAY ERROS
            erros.push(numero);         
            const numErros = erros.length;  // CRIO CONTANTE QUE ARMAGE QUANTIDADE DE NUMER ERRADOS
            const numChances = CHANCES - numErros; // DIMINUO DAS CHANCES O NUMERO DE ERROS ICREMENTADO EM ERROS
            // DIV QUE MOSTRAR NUMER ODE ERROS ADCIONA NUMEROS ERRADO INCLUIDOS NO ARRAY ERROS
            respErros.innerHTML = `${numErros} (${erros.join(', ')})`; // NUMEROS ERRADO INCLUIDO DO ARRAY ERROS
            respChances.innerHTML = numChances; // DIV CHANCES MOSTRA NUMERRO DE CHANCES DECREMETANDO PELO N DE ERROS
            if(numChances === 0) { // SE NUMERO DE CHANCES FOR IGUAL A 0
                alert('Sua chances acabaram...') // ALETE CHANCES ACABARAM
                frm.btSubmit.disabled = true; // DESATIVA O BOTÃ ODE ENVIO DE NUEMROS
                frm.btNovo.className = 'exibe'; 
                outDica.innerHTML = `Game over! Numero sorteado era: ${numero}`; // OUTPUT DE DICAS MOSTRA GAME OVER
                //REMOÇAR JOGO
                btNovo.addEventListener('click', () => {
                    window.location.reload()
                })
            } else {
                // ENQUANTO OUVER CHANCES, LET ANALISA NUMERO DIGITADOS E Vê SE É MAIOR OU MENO RQ NUMER OS SORTEADO
                const dica = numero < sorteado ? 'Maior' : 'Menor'; 
                outDica.innerHTML = `Dica: tente um numero ${dica} que ${numero}`
                // OUTPUT DICA MOSTRAR SE O NUMERO DIGITADO É MAIOR OU MENOR Q O NUMERO SORTEADO
            }
        }
    }
    frm.inNumero.value = '';
    frm.inNumero.focus();
});
