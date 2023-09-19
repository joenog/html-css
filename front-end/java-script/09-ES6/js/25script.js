/* FUNCOES CONSTRUTURAS */
let Carro = function() {
    var velocidadeMaxima = 180;
    var quilometrosRodados = 0;
    
    this.cor = 'Amarelo';
    this.modelo = 'Chevete'
    this.velocidadeAtual = 0;
    //this.velocidadeMaxima = 180;

    this.getVelocidadeAtual = function () {
        return this.velocidadeAtual; /// FUNCAO COM GET QUE RETORNA VELOCIDADE ATUAL
    }

    this.acelerar = function() {
        let velocidade = this.getVelocidadeAtual() + 50;
        if (velocidade >= velocidadeMaxima) {
            velocidade = velocidadeMaxima;
        }
        this.setVelocidadeAtual(velocidade);
        setQuilometrosRodas(0.07)
        console.log(quilometrosRodados)
        //SEM ´QUE ACELERAR FOR CHAMADO ESSE ICREMENTARÁ VELOCIDADE ATUAL
    }
    
    this.setVelocidadeAtual = function(velocidadeAtual) { // O ATRIBUTO RECEBE A VARIVEL ANTERIOR Q INCREMETA 10
        this.velocidadeAtual = velocidadeAtual;
    }

    var setQuilometrosRodas = function(q) {
        quilometrosRodados += q
    }
}

let carro = new Carro(); // INSTACIA DE CARR OCRIADO
console.log(carro.velocidadeAtual) // VELOCIDADE INICIAL CARRO APRADO IMPRESSO
console.log(`Velocidade atual: ${carro.getVelocidadeAtual()}`) // VELOCIDADE ATUAL DO CARRO
carro.acelerar(); // VELOCIDADE ATUAL 
carro.acelerar();
console.log(`Velocidade atual: ${carro.getVelocidadeAtual()}`)
carro.acelerar();
carro.velocidadeMaxima = 600
console.log(`Velocidade atual: ${carro.getVelocidadeAtual()}`)
carro.acelerar();
console.log(`Velocidade atual: ${carro.getVelocidadeAtual()}`)
carro.acelerar();
console.log(`Velocidade atual: ${carro.getVelocidadeAtual()}`)
console.log(carro)

let carro2 = new Carro(); // INSTACIA DE CARR OCRIADO
console.log(carro2.velocidadeAtual) // VELOCIDADE INICIAL CARRO APRADO IMPRESSO
console.log(`Velocidade atual: ${carro2.getVelocidadeAtual()}`) // VELOCIDADE ATUAL DO CARRO
carro2.acelerar(); // VELOCIDADE ATUAL 
carro2.acelerar();
console.log(`Velocidade atual: ${carro2.getVelocidadeAtual()}`)
carro2.acelerar();
console.log(`Velocidade atual: ${carro2.getVelocidadeAtual()}`)
carro2.acelerar();
console.log(`Velocidade atual: ${carro2.getVelocidadeAtual()}`)
carro2.acelerar();
console.log(`Velocidade atual: ${carro2.getVelocidadeAtual()}`)
console.log(carro2)
