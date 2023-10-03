const numeros = [5,6,99,44];

let dobro = numeros.map((num) => num * 2);
console.log(dobro.join(', ')); // aplico join para formatar a impressão do array em string
/* então o num na verdade é um parametro da funçao que lera todos os numeros do array e dentro da função chamo o parametro e o mutiplico por 2  */