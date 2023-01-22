var nome = prompt('Qual é o seu nome ?');
var soma = Number (20*2)
alert('Olá mundo!' + nome + soma);

/*  
O codigo abaixo tem a funação de seleciona o olemento no DOM e 
atualizar seu valor com um calculo/number
*/
document.getElementById('nome').value = 'OI'
document.querySelector('#nome').value = Number(20*2)