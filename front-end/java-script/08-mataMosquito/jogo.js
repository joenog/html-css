// FLEXIBILIDADE NAS DIMENÇÕES DO JOGO
let height = 0; 
let width = 0;
let vidas = 1;
let tempo = 10;
//CRONOMETRO E 20s
let cronometro = setInterval(() => {
    tempo--;
    //SE O TEMPO FOR 0 E HOUVER VIDAS YOU WIN
    if (tempo < 0) {
        //LOGICA PARA GANHO DO JOGO
        clearInterval(cronometro); // LIMPAR INTERVAL DA VAR CRONOMETRO
        clearTimeout(criaMosquito);
        window.location.href = 'pages/vitoria.html'
    } else { // SE TEMPO OU VIDAS CABAREM GAME OVER
        document.getElementById('cronometro').innerHTML = tempo;
    }

}, 1000)

function ajustaTamanhoJogo() {
    height = window.innerHeight; // var height recebe a height atual definida do window
    width = window.innerWidth;  // var width recebe a width atual definida do window
}
ajustaTamanhoJogo();

// POSIÇÃO RANDOMICA DAS MOSCAS
function mosquitoRandom() {
    let posicaoY = Math.floor(Math.random() * (height - 70)); // posicaoX number random  da variavel height
    let posicaoX = Math.floor(Math.random() * (width - 70)); // posicaoY mumber random da variavel width
    //REMOVER MOSQUITO ANTERIOR CASO ESXISTA
    if (document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove(); // funcao remover para remover objet
        //VIDAS REMOVIDAS
        if (vidas > 3) {
            window.location.href = 'pages/gameOver.html'
        } else {
            document.getElementById('v' + vidas).src = 'img/coracao_vazio.png';
            vidas++;
        }
    };
    
    // CONTROLE CASO POSICAO NEGATIVA
    posicaoX = posicaoX <= 0 ? 70 : posicaoX; //  controle caso o random retorne numero 0 
    posicaoY = posicaoY <= 0 ? 70 : posicaoY; //  e a posicão do mosquito fique negativada menos 90
    // CRIAR ELEMENTO HTML
    let mosquito = document.createElement('img'); // crio elemento img 
    mosquito.src = 'img/mosquito.png'; // element criado mosquito atribuo um src da imagem
    mosquito.className = `${tamanhoAleat()} ${ ladoAleat()}`; //concateno as funcoes que retorna estilos
    mosquito.id = 'mosquito';
    mosquito.alt = 'img-mosca'; // texto alternativo para identificar imagem
    mosquito.style.left = posicaoX + 'px'; // posição letf que recebe tamanho randomico  
    mosquito.style.top = posicaoY + 'px';
    // REMOVER MOSQUITO
    mosquito.onclick = function() {
        this.remove();
    }
    document.body.appendChild(mosquito); // adiciono o mosquito.ing ao body html  
}
// INTERVAL PARA CRIAÇÃO DE MOSQUITOS
const criaMosquito = setInterval(() => {
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
    return lado === 0 ? 'ladoA' : 'ladoB';
}
