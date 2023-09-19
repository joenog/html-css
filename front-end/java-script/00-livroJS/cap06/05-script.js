const frm = document.querySelector('form'); // obtem elementos da pagina
const respNome = document.querySelector('span');
const respLista = document.querySelector('pre'); 

const pacientes = []; //declara vetor global

frm.addEventListener('submit', (e) => {
    e.preventDefault();
    //AQUI SERÁ ADICIONADO A LISTA O NOME DOS PACIENTES
    const nome = frm.inPaciente.value; // obetem nome do paciente
    pacientes.push(nome); // adiciona o paciente ao array

    let lista = ''; // string para aoncater pacientes
    
    for (let i = 0; i < pacientes.length; i++) { // i receb 0 equanto i for menor q qntd de paciente i ++
        lista += `${i + 1}º ${pacientes[i]} \n` // lista reebe o iterado +1 e o nome dos pacientes
    }
    respLista.innerText = lista; //exibe lista de paciente na pagina
    frm.inPaciente.value = ''; // limpa a caixa do nome do paciente
    frm.inPaciente.focus();
})

    //ADICIONAR OUVINTE PARA BOTÃO DE URGENCIA
    frm.btnUrgencia.addEventListener('click', ()=> {
        // verfifica se as validações do form estão ok
        if (!frm.checkValidity()) {
            alert('Informe o nome do paciente a ser atendido com urgencia')
            frm.inPaciente.focus() // posiciona o cursor no pacinete
            return /// retorna ao formu
        }
        const nome = frm.inPaciente.value; 
        pacientes.unshift(nome); // adiciona paciente no inicio do vetor/lista
        let lista = ''; /* inscript para concaterna pacientes */
        //forEach aplicado sobre array paciente
        pacientes.forEach((paciente, i) => (lista += `${i + 1} ${paciente} \n`));
        respLista.innerText = lista; // exibe lista de pacientes na pagina
        frm.inPaciente.value = '' // limpa conteu do campo do formulario
        frm.inPaciente.focus(); // posicona cursor no campo
    });

    frm.btnAtender.addEventListener('click', () => {
        //se o tamanho do array for igual a 0
        if (pacientes.length == 0) {
            alert('Não há pacientes na lista de espera!'); // Caso nao haj pacientes
            frm.inPaciente.focus(); // foca no imput paciente
            //return;
        }
        const atender = pacientes.shift() // remove o paciente no inicio da lista e obtem nome na var
        respNome.innerText = atender; // exibe o nome do paciente em atendimento
        let lista = '';
        pacientes.forEach((paciente, i) => (lista += `${i + 1}. ${paciente} \n`));
        respLista.innerText = lista; /* exibe lista de pacientes na pagina */
    })
    