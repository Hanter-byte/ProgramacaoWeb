const alunos = ['Pedro', 'João', 'Sabrina'];
const notas = [10, 8, 9];

let listaDeNotasAlunos = [alunos, notas];

const exibeNomeNota = (alunos) => {
    if(listaDeNotasAlunos[0].includes(alunos)){
        indice = listaDeNotasAlunos[0].indexOf(alunos)
        return listaDeNotasAluno[0][indice] + `, sua media é ` + listaDeNotasAlunos[1][indice]
    } else{
        return "Aluno não cadastrado"
    }
}

console.log(exibeNomeNota("João"))