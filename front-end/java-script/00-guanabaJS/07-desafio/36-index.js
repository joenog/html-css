let nomes = [];
let idade = 19;

if (idade < 18 ) {
    console.log('Você nao pode ser incluido na lista vip');
} else {
    let nome = 'jonny'
    if (nome.length <= 4) {
        console.log('O nove deve ter mais de cinco caracteres e nada de numeros, tente novamente.');
    } else {
        nomes.push(nome);
        console.log(nomes);
    }

}