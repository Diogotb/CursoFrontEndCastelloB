// Criar um programa que receba Vária Notas e Calcule a Média
const prompt = require("prompt-sync")();

let vetorNotas = [];

let contador = 0;
let continuar = true;
while (continuar) {
    console.log("1. Digitar Nova Nota");
    console.log("2. Calcular Média");
    console.log("3. Sair");
    let operacao = prompt("Escolha a Opção Desejada: ");
    switch (operacao) {
        case "1":
            contador++;
            let nota = Number(prompt("Digite a Nota do aluno "+contador+": "));
            vetorNotas.push(nota);
            break;
        case "2":
            let media = vetorNotas.reduce((x,y)=> x+y,0)/vetorNotas.length;
            console.log("A média da Sala é "+media)
            break;
        case "3":
            continuar = false;
            console.log("Saindo");
        default:
            break;
    }

}
