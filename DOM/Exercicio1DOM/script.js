///Exercício 1 - DOM

// parte 1 - Mostrar no Console
let titulo = document.getElementById("titulo");
console.log(titulo);

let paragrafo = document.querySelector("p");
console.log(paragrafo);

//parte 2 - Mudar Texto

//listener 
document.getElementById("btn").addEventListener(
    "click", MudarElementos
)

function MudarElementos(){
    titulo.innerText = "Novo Título";
    paragrafo.innerText = "Novo Exemplo de Parágrafo";
}


//parte 3 - Mudar Fundo
document.getElementById("btnFundo").addEventListener(
    "click", MudarFundo
);

function MudarFundo() {
    document.body.style.backgroundColor = "blue";
}

//parte 4 - Adicionar Classe

titulo.classList.add("descricao");

document.querySelector(".descricao").style.color = "red";

