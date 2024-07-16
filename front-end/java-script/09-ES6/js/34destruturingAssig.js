//COMPOSIÇÃO - QUAND OCRIAMOS OBJETOS DENTRO DE OBJETOS
//A composição em programação ocorre quando objetos são criados dentro de outros objetos. 
//"É um" é usado quando há apenas um objeto, enquanto
// "há um" é usado quando um objeto está contido dentro de outro objeto.
let produto = {
    nome: 'Notebook',
    preco: 1900,
    detalhes: {
        marca: 'abc',
        modelo: 'xyz'
    } // ATRIBUBI OBJETOS A ATRIBUTOS DE OUTROS OBEJETOS
};
//ENTRAINDO ATRIBUTOS ANINHADOS DE OBJETOS
// TMB USEI A RENOMEAÇÃO DAS VARIAVES/ ATRIBUTOS
let {detalhes: {marca: brand, modelo: model}} = produto; // LITERALMENTE INSIRO O ANINHAMENTO QUE QUER EXTRAIR
console.log(brand, model);


/*
//DANDO NOME AS VARIAVEIS : NAME
let {nome: n, preco: p} = produto;
console.log(n, p);*/


/*// aq a função recebe a desetruturação do objeto dentro dos parametros da funcação
// e sua saida erá esses parametros requeridos ao nome do objeto futuramente
let showDado = ({nome, preco}) => {
    console.log(`Nome: ${nome} - Preço: ${preco}`)
}
showDado(produto);*/

// ATRIBUINDO VALOR DEFALT A NOVOS PARAMETROS
let showDado = ({ nome, preco }, desconto = 5) => {
    console.log(`Nome: ${nome} - Preço: ${preco} - Desconto : $ ${desconto.toFixed(2)}`)
}
showDado(produto);
//CASO EU TENTE DEFINIR UM NOVO VALOR A UM ATRIBUTO QUE N RETORIA UNDEFINED, ESSE NOVO VALOR SERA IGNORADO