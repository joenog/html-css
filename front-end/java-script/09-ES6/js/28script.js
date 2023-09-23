/* OBEJTO LITERAL AVIÃO */

/* ATRIVUTOS COR, MODELO - METODO: LEVANTAR VOO */
let a1 = {
    cor: 'Branco',
    modelo: 'Airbus a 380',
    levantarVoo: function() {console.log('Levantoou vou!')}
}

/* FUNCAO CONSTRUTUROA */
let AviaoF = function() {
    this.cor = 'Azul',
    this.modelo = 'Boeing 787',
    this.levantarVoo = function() { console.log('Levantar Voo') }
}

let a2 = new AviaoF()

/* CLASSE AVIAO */

class AviaoC {
    constructor() {
        this.cor = 'Laranja';
        this.modelo = 'Embraer E-jets';
    }
    levantarVoo() {
        console.log('Levantar Voo');
    }
};

let a3 = new AviaoC()

console.log(a1)
console.log(a2)
console.log(a3)