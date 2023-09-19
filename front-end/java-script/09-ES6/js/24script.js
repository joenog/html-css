/* FUNCOES CONSTRUTURAS */
let Carro = function() {
    this.cor = 'Amarelo';
    this.modelo = 'Chevete'
    this.velocidadeAtual = 0;
    this.velocidadeMaxima = 180;

    this.getVelocidadeAtual = function () {
        return this.velocidadeAtual; /// FUNCAO COM GET QUE RETORNA VELOCIDADE ATUAL
    }

    this.acelerar = function() {
        // this.velocidadeAtual += 10;
        let velocidade = this.getVelocidadeAtual() + 10;
        this.setVelocidadeAtual(velocidade);
        //SEM ´QUE ACELERAR FOR CHAMADO ESSE ICREMENTARÁ VELOCIDADE ATUAL
    }
    
    this.setVelocidadeAtual = function(velocidadeAtual) { // O ATRIBUTO RECEBE A VARIVEL ANTERIOR Q INCREMETA 10
        this.velocidadeAtual = velocidadeAtual;
    }
}

let carro = new Carro(); // INSTACIA DE CARR OCRIADO
console.log(carro.cor) // COR DE CARRO IMPRESSA
console.log(carro.velocidadeAtual) // VELOCIDADE INICIAL CARRO APRADO IMPRESSO
console.log(`Velocidade atual: ${carro.getVelocidadeAtual()}`) // VELOCIDADE ATUAL DO CARRO
carro.acelerar(); // VELOCIDADE ATUAL 
carro.acelerar();
console.log(`Velocidade atual: ${carro.getVelocidadeAtual()}`)