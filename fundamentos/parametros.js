function tabuada(numero){
    for(i = 0; i<=10; i++){
       console.log(`${numero} * ${i} = ${numero * i}`);
    }
}

tabuada(9);

function tabuadaDois(numUm, numDois){
    return numUm * numDois;
}

console.log(tabuadaDois(8, 7));