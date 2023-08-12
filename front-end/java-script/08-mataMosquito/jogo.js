// FLEXIBILIDADE NAS DIMENÇÕES DO JOGO
let height = 0; 
let width = 0;
function ajustaTamanhoJogo() {
    height = window.innerHeight; // var height recebe a height atual definida do window
    width = window.innerWidth;  // var width recebe a width atual definida do window
    //console.log(height, width);
}
ajustaTamanhoJogo();

// POSIÇÃO RANDOMICA DAS MOSCAS
function mosquitoRandom() {
    let posicaoY = Math.floor(Math.random() * (height - 70)); // posicaoX number random  da variavel height
    let posicaoX = Math.floor(Math.random() * (width - 70)); // posicaoY mumber random da variavel width
    console.log(posicaoX, posicaoY)
    
    //REMOVER MOSQUITO ANTERIOR CASO ESXISTA
    setTimeout(() => {
        if (document.getElementById('mosquito')) {
            document.getElementById('mosquito').remove(); // funcao remover para remover objeto
        };
    }, 1100); //delay para remover

    // CONTROLE POSICAO NEGATIVA
    posicaoX = posicaoX <= 0 ? 70 : posicaoX; //  controle caso o random retorne numero 0 
    posicaoY = posicaoY <= 0 ? 70 : posicaoY; //  e a posicão do mosquito fique negativada menos 90

    // CRIAR ELEMENTO HTML
    let mosquito = document.createElement('img'); // crio elemento img 
    mosquito.src = 'img/mosquito.png'; // element criado mosquito atribuo um src da imagem
    mosquito.className = `${tamanhoAleat()} ${ladoAleat()}`; //concateno as funcoes que retorna estilos
    mosquito.id = 'mosquito';
    mosquito.alt = 'img-mosca'; // texto alternativo para identificar imagem
    mosquito.style.left = posicaoX + 'px'; // posição letf que recebe tamanho randomico  
    mosquito.style.top = posicaoY + 'px';
    document.body.appendChild(mosquito); // adiciono ao body elemente img criado

    // CAVEIRA AO MATAR MOSQUITO
    mosquito.addEventListener('click', () => {
        mosquito.src = 'img/kill.png';
    });
}

// INTERVAL PARA CRIAÇÃO DE MOSQUITOS
setTimeout(() => {
    mosquitoRandom();
}, 2000);

//TAMANHO ALEATORIO DA MOSCA
function tamanhoAleat() {
    let classe = Math.floor(Math.random() * 3);
    if (classe === 0) {
        return 'mosquito0';
    } else if (classe === 1 ) {
        return 'mosquito1';
    } else {
        return 'mosquito2';
    }
};

//LADO ALEATORIO DO MOSQUITO
function ladoAleat() {
    let lado = Math.floor(Math.random() * 2);
    lado = lado === 1 ? 'ladoA': 'ladoB';
}