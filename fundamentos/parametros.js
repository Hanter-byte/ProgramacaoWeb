function tabuada(numero){
    for(i = 0; i<=10; i++){
       console.log(`${numero} * ${i} = ${numero * i}`);
    }
}

function tabuadaDois(numUm, numDois){
    return `${numUm} * ${numDois} = ${numUm * numDois}`;
}

function nomeIdade(nome, idade){
    return `Meu nome é ${nome} e minha idade é ${idade} anos`
}

tabuada(9);
console.log(nomeIdade("João", 20));
console.log(tabuadaDois(3, 6));