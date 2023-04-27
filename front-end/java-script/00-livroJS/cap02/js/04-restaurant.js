
const form = document.querySelector('form');  // referencia com form
const res = document.querySelector('#res'); // crio referencia para resposta
// ouvidor com funçcion
form.addEventListener('submit', enviar => { // ouvinte de envento acionado com botao submit
    enviar.preventDefault();  // previne q o formulario seja enviado
    const precoQuilo = form.inQuilo.value; // constante do valor por kilo
    const consumo = form.inConsumo.value; // contado do consumo em gramas
    
    const preco = (precoQuilo / 1000) * consumo; // Peço por grama - ex: 50 reais 1000 gramas
    const valorComTaxa = preco * (1 + taxa); // o preço é mutiplicado por 1 mais a taxa de 0.10, adicionando 10% ao valor
    const taxa = 0.1; // taxa de 10% sobre o valor
    res.innerHTML = `PAGUE: ${preco.toFixed(2)} <br>`; // mostrando as respostas
    res.innerHTML += `Valor com Taxa: ${valorComTaxa.toFixed(2)}`
})