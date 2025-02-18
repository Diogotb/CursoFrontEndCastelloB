//desafio 1 -  idade
var prompt = require("prompt-sync")();

var idade = prompt("Informe sua Idade: ");

if(idade<18){
    console.log("Menor de Idade");
}else if(idade<60){
    console.log("Adulto");
}else{
    console.log("Idoso")
}

//desafio 2 -  tabuada do 5

let num = 5
for(let i = 0; i<=20 ; i++){
    console.log(num+" x "+ i +" = "+(i*num))
}

//desafio 3 - numeros pares

for(let i = 1 ; i<=20 ; i++){
    //imprimir nº pares
    let resto = (i%2); //Operador % resto da div
    if(resto == 0){
        console.log(i);
    }
}