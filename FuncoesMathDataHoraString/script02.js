// Manipulação de String (Cadeia de Caracteres)

let texto = "Aula de JavaScript";

//contar quantos caracteres tem essa variável
console.log(texto.length); //18

// MAIÚSCULAS e minúsculas
console.log(texto.toUpperCase()); //MAIÚSCULAS
console.log(texto.toLowerCase()); //minúsculas

//partes da String
console.log(texto.substring(0,4)); //Aula
console.log(texto.slice(-10));//JavaScript

//substituição de parte da String
let texto2 = texto.replace("Java","Type");// Aula de TypeScript
console.log(texto2);

// tesoura(trim)
let texto3 = "  JavaScript  ";
console.log(texto3); //"  JavaScript  "
console.log(texto3.trim()); //"JavaScript"

//Seraparação de String

let linguagens = "JavaScript, Python, PHP, C++, Java";
let linguagensArray = linguagens.split(", ");
console.log(linguagens);
console.log(linguagensArray);

//desafio
//contar a quantidade de caracteres sem espaço
let desafio = "Bom Dia Com Muita Alegria";
let solucaoDesafio = desafio.replaceAll(" ","");
console.log(desafio);
console.log(solucaoDesafio);
console.log(desafio.length);
console.log(solucaoDesafio.length);