const nomes = ['João', 'Pedro', 'Gabriel', 'Sabrina', 'Geovana', 'Camila', 'Henrique', 'Maria', 'Luiz'];

const sala1 = nomes.slice(0, nomes.length/2); //Slice para dividir o Array
const sala2 = nomes.slice(nomes.length/2); //Lensht/2 para pegar até a metade

console.log(sala1);
console.log(sala2);