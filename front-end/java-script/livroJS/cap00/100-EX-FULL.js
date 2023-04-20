const saudar = (horaAtual) => {
    if (horaAtual <= 12) return 'Bom dia!'
    if (horaAtual <= 18) return 'Boa tarde!'
    else return 'Boa noite!'
}
console.log(saudar(new Date().getHours()))
console.log(Number.isInteger(4))
