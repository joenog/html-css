/*let bike1 = {
    cor: 'amarela',
    marcha: 'unica',
    aro: 12,
    pedalar()  {
        console.log('Pedalando!')
    }
}*/

let BikeFactory =  function(cor, marcha, aro) {
    return {
        cor,
        marcha,
        aro,
        pedalar() {
            console.log('Pedalando!')
        }
    }
}

let bike1 = BikeFactory('verde', 20, 12)
bike1.pedalar()
console.log(bike1)
let bike2 = BikeFactory('rosa', 10, 2)
bike1.pedalar() 
console.log(bike2)