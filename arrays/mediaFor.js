const notas = [10, 7, 7.5]

let somaNotas = 0

for(let i = 0; i< notas.length; i++){
    somaNotas += notas[i];
}

let media = somaNotas/notas.length;

console.log(media.toFixed(2));