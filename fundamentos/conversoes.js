//tipo de dado
// booleanos


//conversão implicita
const numero = 433;
const numeroString = "433";
console.log(numero == numeroString); //conversão impicita

//conversão explicita
console.log(numero === numeroString); //conversão explicita

//Number()
//String()

console.log(numero + Number(numeroString))//Tranformando valor em numero
console.log(String(numero) + numero)//Transformando valor em String