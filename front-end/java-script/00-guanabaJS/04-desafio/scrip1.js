let ano = Number(prompt('Que ano vc nasceu?')); //number promp para receber data de nasciemento
        let data = new Date().getFullYear();  // new data paraa pegar data do sistema
        let res = document.querySelector('#resp'); // setsda var res do html

        document.body.style.background = 'white' // modificaçoes js para html bascias
        document.body.style.fontSize = '2em'  // modificaçoes js para html bascias
        
        if (isNaN(ano) || ano.length == 0 || ano == '' || ano >= data) { //checager de erros ao inserir os valor
            alert('[ERRO] Preencha corretamente!') // aleta de erro
            document.body = location.reload() // recarregar link local caso o cliente erre
        } else {
            const calc = data - ano; // variavel calculo para saber idade do user;

            if (calc < 16) {
                res.innerHTML = `${calc} anos... Não podera votar, mas volte em breve!`;
            }
            else if (calc < 18 || calc >= 55) {
                res.innerHTML = `${calc} anos, Voto voluntário!`;
            }
            else if (calc < 55) {
                res.innerHTML = `${calc} anos, Você é obragado a votar!`;
            }
        }
