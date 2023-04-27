function verificar() {

    var data = new Date();  //busco a data
    var ano = data.getFullYear();  //busco o ano
    var nasci = document.querySelector('#txtano');  //busco o input que capta o ano
    var res = document.querySelector('#res');  // captei a div de par  exibir a respostA

//primeir faço os possiveis erros

    var fsex = document.getElementsByName("radsex");  //usei element by name pois radio preciso
    var idade = ano - Number(nasci.value); // calculei ano atual menos o digitado no input
    var genero = ''; //defini uma var vazia  para que seja preenchida de acordo com sexo escolhido
    var img = document.createElement('img'); // criei uma  ele dentro de um variavel para alterala
    img.setAttribute('id', 'foto'); // dei um id ao elemnto img que cirei em JS

    if (nasci.value.length == 0 || nasci.value > ano) {  // comparo se o ano é igual a 0 ou maior que o ano atual
        alert('[ERRO!] Verifique os dados e tente novamente!') ; // se for maiorq ano atual ou igual a 0 exibo alert

    } else if (idade > 120) { // 1 else if  verifico se a idade é mentira digo que a pessoas está m0orta
        res.innerHTML = `${idade} anos, duvido que esteja vivo(a)!!!`;
        res.appendChild(img); // adicionar ao res a imagem criada anteriormente no JS
        img.setAttribute('src', 'img/ansiao.png');
    }
    else { // caso as ofções anteriores n seja corretas 
        if (fsex[0].checked) { // checo se a caixa do sexo esta marrcada em masc
            genero = 'Homem'; // atribuo a string homem a VAR genero criada que estava vazia

            if(idade > 0 && idade <= 10) {  // nisso faço checagem de idade se seto/coloco a imagem correta
                //criança
                img.setAttribute('src', 'img/foto-bebe-m.png');
            } else if (idade < 21) {
                //joem
                img.setAttribute('src', 'img/foto-jovem-m.png');
            } else if  (idade < 50) {
                //adulto
                img.setAttribute('src', 'img/foto-adulto-m.png');
            } else {
                //idoso
                img.setAttribute('src', 'img/foto-idoso-m.png');
            }

        } else if (fsex[1].checked) { // checo se a caixar femi foi marcado 
            genero = 'Mulher';  // seto a ela a string mulher

            if(idade > 0 && idade <= 10) {
                //criança
                img.setAttribute('src', 'img/foto-bebe-f.png');
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'img/foto-jovem-f.png');
            } else if  (idade < 50) {
                //adulto
                img.setAttribute('src', 'img/foto-adulto-f.png');
            } else {
                //idoso
                img.setAttribute('src', 'img/foto-idoso-f.png');
            }

        } 

        res.innerHTML = `Detectamos ${genero} de ${idade} anos!`; //insiro na tag res a mensagem interpolada ``
        res.appendChild(img).style.display = 'block'; //adiciono abaixo da mensagem o filho img criado anteriormente
    }
}