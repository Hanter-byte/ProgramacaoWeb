const notas = [10, 7, 8, 5, 10];
notas.pop();// remove a ultima posição do array
console.log(notas);

const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;
console.log(media);