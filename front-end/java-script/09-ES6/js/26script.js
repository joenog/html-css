// FACOTRY OF BIKE
/*
let Bicicleta1 = {
    cor: 'Branca',
    marcha: 'Unica',
    aro: 12,
    pedarlar() {console.log('Metodo pedalar execultado')}
}

console.log(Bicicleta1)*/

let BicicletaFactory = function(cor, marcha, aro) {

    return {
        cor,
        marcha,
        aro,
        pedalar() {console.log('Bike depalando')}
    }
}

let Bicicleta3 = BicicletaFactory('verde', 5, 25)
let Bicicleta4 = BicicletaFactory('verde', 8, 45)
console.log(Bicicleta3)
console.log(Bicicleta4)