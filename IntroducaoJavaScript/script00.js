// Introdução JavaScript

//Tipo de Dados(escopo, tipagem)

// tipo - String - Text
var nome = "João"; // variavel de escopo global
nome = "José"; // redefinir valor
var nome = "Pedro";//redeclaração da var 

//tipo Number - 
let idade = 25; // variavel de escopo local
idade = 26; //redefinir valor - ok
// let idade = 30; //erro redeclarar

// tipo Number
const PI = 3.1415; //constante
// PI = 3.9876 ; //erro - não pode redefinir
// const PI = 4.6543; //erro - nao pode redeclarar

//tipo Boolean
var aprovado = true;

//tipo undefined
var media;

//tipo null - vazio
var info = null;


console.log("Nome: "+nome); //imprimir no terminal
console.log("Idade: "+idade); //Number
console.log("PI: "+PI);//Number
console.log("Aprovação: "+aprovado);//Boolean
console.log("Média: "+media);//undefined
console.log("Informações: "+info); // null
