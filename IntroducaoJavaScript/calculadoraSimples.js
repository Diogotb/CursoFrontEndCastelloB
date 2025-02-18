//calculadora simples em JavaScript
var prompt = require("prompt-sync")();

//funções de calculo 
//soma
function soma(a, b){
    return (a+b);
}
//subtracao
function sub(a,b){
    return (a-b);
}
//multi
function multi(a,b){
    return (a*b);
}
// divisão
function div(a,b){
    return (a/b);
}

// menu
function menu(){
    let operacao;
    let numero1;
    let numero2;
    let resultado;
    console.log("====Calculadora Simples=====");
    console.log("| 1. Soma                  |");
    console.log("| 2. Subtração             |");
    console.log("| 3. Mutiplicação          |");
    console.log("| 4. Divisão               |");
    console.log("============================");
    console.log("Escolha a Operação Desejada:");
    operacao = prompt();
    numero1 = Number(prompt("Informe o nº 1: "));
    numero2 = Number(prompt("Informe o nº 2: "));
    switch (operacao) {
        case "1":
            resultado = soma(numero1,numero2);
            break;
        case "2":
            resultado = sub(numero1,numero2);
            break;
        case "3":
            resultado = multi(numero1,numero2);
            break;
        case "4":
            if (numero2==0) {
                console.log("Não Dividirás por Zero");
                resultado = null;
            }else{
                resultado = div(numero1,numero2);
            }
            break;
        default:
            console.log("Operação Inválida");
            resultado = null;
            break;
    }//fim do switch
    console.log("O resultado é "+resultado);
}

//aplicar a função menu

var continuar = true;
while (continuar) {
    menu();
    let escolha = prompt("1. Continuar // 2. Sair");
    if (escolha == 2) {
        continuar = false;
        console.log("Saindo...");
    }
}