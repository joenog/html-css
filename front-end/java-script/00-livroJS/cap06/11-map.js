const alunos = [
    {nome: 'Maria', idade: 15},
    {nome: 'Carlos', idade: 17},
    {nome: 'Luana', idade: 19}
];

let anoAtual = new Date().getFullYear()
const alunosNasci = alunos.map((aux) => ({nome: aux.nome, nasci: anoAtual - aux.idade})) // novo obj literal
for (const aluno of alunosNasci) {
    console.log(`${aluno.nome} - Nasceu em: ${aluno.nasci}`)
};