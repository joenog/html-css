/*
const saudar = (horaAtual) => {
        if (horaAtual <= 12) return 'Bom dia!'
        if (horaAtual <= 12) return 'Boa tarde!'
        return 'Boa noite!'
}

console.log(saudar(new Date().getHours()))

-----------------------------------
exemplo 1

function criarPessoa(nome) { // funcao criar ressoa recebe parametro nome
        return {nome} // e retorna o parametro dentro dum objeto
}

const pessoa = criarPessoa;  // const pessoa recebe a funcao criar pessoa
const daniel = pessoa('Daniel') // const daniel recebe a const pessoa que tem a funcao e passa a string 'daniel
const cintia = pessoa('cintia') // const cintia recebe a const pessoa que tem a funcao e passa a string 'cintia
console.log(daniel, cintia) // console imprime as duas constantes cintia e daniel
*/

//exmeplo com arrow funcion 2
/*
const criarPessoa = nome => { // funcao criar ressoa recebe parametro nome
        return { nome } // e retorna o parametro dentro dum objeto
}

//forma const com funcion arrow simplificada maias ainda
//const criarPessoa = nome=> ({nome})

const pessoa = criarPessoa;  // const pessoa recebe a funcao criar pessoa
const daniel = pessoa('Daniel') // const daniel recebe a const pessoa que tem a funcao e passa a string 'daniel
const cintia = pessoa('cintia') // const cintia recebe a const pessoa que tem a funcao e passa a string 'cintia
console.log(daniel, cintia) // console imprime as duas constantes cintia e daniel*/
/*
const saudar = (nome, responder) => {
        const horaAtual = new Date().getHours()
        //const responder = resposta => console.log(nome, resposta)

        if (horaAtual <= 12) return responder(nome, 'Bom dia!')    
        if (horaAtual <= 16) return responder(nome, 'Boa tarde!')
        return responder (nome, 'Boa noite!')    
}
//const respCb = (nome, resposta) => console.log(nome, resposta)
saudar('Jon', respCb = (nome, resposta) => console.log(nome, resposta))*/

const saudar = (nome, cb) => {
    const horaAtual = new Date().getHours();
    if (horaAtual <= 12) return cb(nome, 'Bom dia')
    if (horaAtual <= 12) return cb(nome, 'Boa tarde')
    return cb(nome, 'Boa noite')
}
saudar('Jon', cback = (nome, resposta) => console.log(nome, resposta))