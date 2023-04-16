
const form = document.querySelector('form');  // referencia com form
const res = document.querySelector('#res'); // crio referencia para resposta
// ouvidor com funçcion
form.addEventListener('submit', enviar => { // ouvinte de envento acionado com botao submit
    enviar.preventDefault();  // previne q o formulario seja enviado
    const precoQuilo = form.inQuilo.value; // constante do valor por kilo
    const consumo = form.inConsumo.value; // contado do consumo em gramas
    const taxa = 0.1; // taxa de 10% sobre o valor
    
    const preco = (precoQuilo / 1000) * consumo; //Essa linha calcula o preço por grama do alimento. A variável quilo contém o preço por quilo, então é necessário dividir por 1000 para obter o preço por grama.
    const valorComTaxa = preco * (1 + taxa); // o preço é mutiplicado por 1 mais a taxa de 0.10, adicionando 10% ao valor
    res.innerHTML = `PAGUE: ${preco.toFixed(2)} <br>`; // mostrando as respostas
    res.innerHTML += `Valor com Taxa: ${valorComTaxa.toFixed(2)}`
})