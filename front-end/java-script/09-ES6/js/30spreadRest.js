/* CONTEXTO SPREAD */
/* 
let tituloArtigo = `Como usar o Rest/Spread`;

console.log(tituloArtigo);
console.log(...tituloArtigo);
console.log(...tituloArtigo.split(' '));  */

/* let curso1 = ['HTML', 'CSS'];
let curso2 = ['JavaScript', 'C#', 'JAVA'];
let todosCursos = [...curso1, ...curso2];

console.log(todosCursos.toString()); // Saída: ["HTML", "CSS", "JavaScript", "C#", "JAVA"]
 */

let pessoa = {
    nome: 'João',
    idade: 30
}

let endereco = {
    ...pessoa,
    rua: 'Dois de julho',
}

console.log(endereco)

/*  esse é o contexto spread que serve para espalhar estrutura de dados */