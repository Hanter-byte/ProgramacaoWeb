function apresentar(nome){
    return `meu nome é ${nome}`
}
//Arrow function
const apresentarArrow = nome => `meu nome é ${nome}`;
console.log(apresentarArrow("Pedro"));

const soma = (num1, num2) => num1 + num2;
console.log(soma(23, 44));

const somaNumPequenos = (num1, num2) => {
    if(num1 && num2 > 10){
        return "somente numeros de 1 a 9"
    } else{
        return num1 + num2;
    }
}

console.log(somaNumPequenos(2, 9));