// FLEXIBILIDADE NAS DIMENÇÕES DO JOGO
let height = 0; 
let width = 0;
let vidas = 1;
let tempo = 10;
// VARIAVEL INICIAL PARA DEFINICAO O TEMPO QUE SERA APLICADO AO SETINTERASL
var criarMosquitoTempo = 1500;

var nivel = window.location.search;
nivel = nivel.slice(1); // VARIAVEL PARA REMOÇÃO DO CARACTER DO SEARCH DO JAVASCIRPT
//NO ESCRIPT REMOVO A INTERROGAÇÃO AO INICIOA PARA FAZER AS COMPARAÇÕES ABAISO COM IF ELSE
if (nivel === 'normal') { /// CONDIÇÕES PARA MODIFICAR VALOR DOS MILISEGUNDOS DO SETINTTERVAL
    var criarMosquitoTempo = 2000;
} else if (nivel === 'dificil') {
    var criarMosquitoTempo = 1500;
    
} else if (nivel === 'superHard') {
    var criarMosquitoTempo = 1000;
}


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

}, 1000) // A CADA 1s A VIDA É DECREMENTADA

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
    document.body.appendChild(mosquito); // ADICIONO A IMG- MSOQUITO AO BODY  
}
// INTERVAL PARA CRIAÇÃO DE MOSQUITOS
const criaMosquito = setInterval(() => {
    mosquitoRandom();
    //AQUI É APLICADA AVARIAVEL CRIARMOSQUITO TEMPO QUE DEFINE A VELOCIDADE DO MOSQUITO ANTES DE INICIAR O JOGO
}, criarMosquitoTempo);

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

//ADICIONAR BACKGROUNDS VARIAVEIS AO JOGO
