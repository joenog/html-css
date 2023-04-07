const saudar = (horaAtual) => {
    if (horaAtual <= 12) return 'Bom dia!'
    if (horaAtual <= 18) return 'Boa tarde!'
    else return 'Boa noite!'
}
console.log(saudar(new Date().getHours()))
console.log(Number.isInteger(4))

let text = 'freestyle lugar distante aprta  o rec prum lugar distante'
let text2 = text.replace(/lugar/g, 'MATUÊ')
console.log(text2)