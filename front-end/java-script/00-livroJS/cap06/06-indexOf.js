let idade = [2,3,4,5,6,6];
console.log(idade.indexOf(3))
console.log(idade.indexOf(8))
console.log(idade.lastIndexOf(6))
console.log(idade.includes(6))

if(idade.includes(6)) {
    console.log('6 esta includo na posicao ' + idade.indexOf(6))
}