const notas = [10, 9, 7, 8];
let somaNotas = 0;

notas.forEach( nota => {
    somaNotas += nota
})

let media = somaNotas/notas.length

console.log(media);