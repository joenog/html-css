/*const alunos = [
    {nome: 'Maria', idade: 20},
    {nome: 'Pedro', idade: 20},
    {nome: 'Luana', idade: 13},
    {nome: 'Carlos', idade: 14},
    {nome: 'Iara', idade: 17},
    {nome: 'Kuil', idade: 16}
];
let flag = false;
for (const aluno of alunos) {
    if (aluno.idade >= 18) {
        console.log(aluno.nome + '-' + aluno.idade);
        flag = true;
    }
};
if (!flag) {
    console.log('Não há alunos maiores de idade')
};  */

const alunos = [
    { nome: 'Maria', idade: 15 },
    { nome: 'Pedro', idade: 15 },
    { nome: 'Luana', idade: 13 },
    { nome: 'Carlos', idade: 14 },
    { nome: 'Iara', idade: 17 },
    { nome: 'Kuil', idade: 16 }
];
let flag = false;
alunos.forEach((alunos) => {
    if (alunos.idade >= 18) {
        console.log(`${alunos.nome} - ${alunos.idade}`);
        flag = true;
    }
});
if (!flag) {
    console.log('Não há alunos de maior!')
};