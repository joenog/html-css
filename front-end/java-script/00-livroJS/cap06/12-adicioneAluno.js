const frm = document.querySelector('form');
const res = document.querySelector('#res');
const alerta = document.querySelector('#alerta');
const total = document.querySelector('#total');
const alunos = [];
//CONTROLE DE ALERTA
const alertaOn = (msg) => {
    alerta.innerText = `${msg}`;
    alerta.className = 'alertaOn';
    //TIMEOUT PARA RETIRAR ALERTA
    setTimeout(() => {
        alerta.className = 'alertaOff';
    }, 3000);
}

//  OUVINTE SUBMIT AO FORMULARIO
frm.addEventListener('submit', (e) => {
    e.preventDefault();
    // NOME E IDADE INSERIDOS NO FORMULARIO
    const nome = frm.inNome.value;
    const idade = Number(frm.inIdade.value);
    // OBJETO LITERAL PARA ARMAZENAR NOVOS ALUNOS
    const aluno = {
        nome: nome,
        idade: idade
    }
    //FUNCION FOCO FORMULARIO
    foco = ()=> {
        frm.inNome.focus();
        frm.inNome.value = '';
        frm.inIdade.value = '';
    };
    // USO FIND PARA BUSCAR ALUNOS JA ADICIONADOS E IMPEDIR A REPETIÇAO
    const alunosAdd = alunos.find(item => { return item.nome == aluno.nome}); // 
    // ALUNOS ADD == TRUE
    if(alunosAdd || nome == '') {
        alertaOn(`Aluno já adicionado...`);
    } else {
        alunos.push(aluno);
        res.innerHTML = ' ';
        foco();
        // FOREACH PARA LER E IMPRIMIR ELEMNTOS DO ARRAY
        alunos.forEach((item, index) => {
            res.innerHTML += `${index + 1} Aluno: ${item.nome} - Idade: ${item.idade} </br>`;
            total.innerText = `Qtd. Alunos: ${index + 1}`;
        });
    };
});

//MOSTAR LISTAR DE ALUNOS
const btnMostrar = document.querySelector('#btnMostrar');
btnMostrar.addEventListener('click', () => {
    if (alunos.length < 1) {
        alertaOn(`Lista vazia...`);
    } else {
        res.style.display = res.style.display === 'block' ? 'none' : 'block'; 
    }
});