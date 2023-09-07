let assinatura = {
    idCliente: 1000,
    descricao: 'Acesso a internet',
    status() {
        console.log('Ativo')
    }
};

console.log(assinatura)

let y = assinatura;
y.valor = 49.90;
y.descricao = 'Internet + tv + assinatura + telefone';
console.log(y);

/*  AS ALTERACOES FEITAS NAS VARIAVEIS Y MODIFICARÃO o objeto assinaturo 
pois o y recebe a assinatura e trablharar como um link do objeto */