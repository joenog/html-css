const artigo = ( cbSucesso, cbErro) => {
        const horaAtual = new Date().getHours();
        if (horaAtual <= 18) return cbSucesso(' Tudo ok');
        return cbErro('Erro nan');
}

const sucesso = (sucesso) => {
        console.log(sucesso)
}
const erro = (erro) => {
        console.log(erro)
}
artigo('1', sucesso, erro);