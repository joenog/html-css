//DECRESCENTE ULTIMA FORMA CALLBACK SIMPLIFICADA

const saudar = (nome, cb) => { // const saudar com dois paramtros nome e cback
        const horaAtual = new Date().getHours(); // const hora atual
        if (horaAtual <=12) return cb(nome, 'Bom dia') // condicao com retorno da cback
        if (horaAtual <=18) return cb(nome, 'Boa Tarde')
        return cb(nome, 'Boa noite')
}
const cback = (nome, resposta) => console.log(nome, resposta) // const cb é uma funcao q armazena dois paramtros se retorna
saudar('Jon, ', cback)



/*FINAL REFEITO SOZINHO

const saudar = (nome, cback) => {
        const horaAtual = new Date().getHours();
        //const responder = (resposta) => {console.log(nome, resposta)}
        if (horaAtual <= 12) return cback(nome, 'Bom dia!');
        if (horaAtual <= 18) return cback(nome, 'Boa tarde!');
        return cback(nome,'Boa noite!');
}

const cback = (nome, resposta) => {console.log(nome, resposta)}
saudar('Jon', cback)
--------------------------------

/*
const saudar = (nome) => {
        const hora = new Date().getHours();
        const resposta = (saudacao) => {return console.log(saudacao, nome)}

        if (hora <= 12) return resposta('Bom dia!');
        if (hora <= 18) return resposta('Boa Tarde!');
        return resposta('Boa noite!')
}
saudar('Joao');

const saudar = (nome) => {
        const hora = new Date().getHours();
        
        const saudacao = (saudacao) => { return console.log(nome, saudacao)}
        
        if (hora < 12) return saudacao('Bom dia!')
        if (hora < 18) return saudacao('Boa tarde!')
        return saudacao('Boa noite!')
}

saudar('Jon,')
*/


