let agora = new Date()
let hora = agora.getHours()

if (hora < 6) {
    console.log('Boa madrugada')
} else if (hora < 12) {
    console.log('Bom dia')
} else if (hora < 18)  {
    console.log('Boa tarde')
} else if (hora > 18 && hora <= 24) {
    console.log('Boa noite')
}
else {
    console.log('Valor invalido')
}

console.log(`Agora são extamente ${hora} horas!`)