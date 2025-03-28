//Script de Manipulação DOM

//getElementById -> variável Simples
let titulo = document.getElementById("titulo");//html -> Id
console.log(titulo); // mostra as informações da Id
titulo.innerText = "Outro Título"; // modificar o conteúdo da Id

//getElementsByTagName -> variável Vetor(Array)
let paragrafo = document.getElementsByTagName("p"); //html -> "p"
// modificar elemento
paragrafo[0].innerText = "Exemplo de Parágrafo Modificado por DOM";
//modificar style do elemento
paragrafo[1].style.color = "red";

//getElementsByClassName -> variável Vetor(Array)
let descricao = document.getElementsByClassName("descricao");
// Modificar elementos do Array
for(let i = 0; i<descricao.length; i++){
    descricao[i].style.color = "blue";
}

//querySelector -> variavel simples - > seleciona o 1º
let p = document.querySelector("p");
//modificação de font
p.style.fontWeight = "bold";

//querySelectorAll -> variavel Vetor(array) - > Seleciona Todos
let descricaoAll = document.querySelectorAll(".descricao");
descricaoAll.forEach(element => {
    element.style.fontWeight = "bold";
});

//eventos listener(ouvinte)

// 
function MudarCorFundo(){
    let body = document.querySelector("body");
    body.style.backgroundColor = "green"; 
}

// chamento direto no script o ouvinte
document.getElementById("btnColor").addEventListener(
    "click",OutraCor
)

function OutraCor(){
    let body = document.querySelector("body");
    body.style.backgroundColor = "orange";
}