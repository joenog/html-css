/*
let frutas = ['Abacaxi', 'Pera', 'Uva', 'Mamão'];

let [a, b, ,c] = frutas; //Desestruturei o array frutas, atribuindo seus valores às variáveis a e b.
// posso ignorar a impressão de alguns vaorees do array simplismente não atribuindo variaveis ao valor
console.log(a, b, c);
 */
let frutas = ['Abacaxi', 'Pera', 'Uva', 'Mamão'];

let [a, b, c, d, e = 'Banana'] = frutas; //Desestruturei o array frutas, atribuindo seus valores às variáveis a e b.
// na desestruturação posso atribuir um valor inexiste da array
console.log(a, b, c, d, e);


/* 
Parâmetros padrão, ou "default parameters" em inglês, são valores que você pode definir para os parâmetros de uma função no JavaScript */


let coisas = [['Abacaxi', 'Pera', 'Uva', 'Mamão'], ['josé', 'maria', 'pedro']];
// aqui criei um arrai coisas que contem 2 arrays com frutas e nomes
let [[, , , fru3], [, n1]] = coisas;
// aqui desestruturo o array coisas nele ignoro o primeiro array dentro do array coisas e no segundo array
//ignoro a chave 0 e recupero o valor contido na chave 1
console.log(n1)
console.log(fru3);