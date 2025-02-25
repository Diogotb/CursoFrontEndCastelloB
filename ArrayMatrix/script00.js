//declaração de uma array "[]"
let array = []; //array dinâmico
//tipos de arrays
let arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let arrayTexto = ["Sapato", "Caixa", "Meia"];
let arrayMisto = [1, "José", true];

// tamanho de uma array (length)
console.log(arrayNumeros.length); //9

// acessar um elemento do array (index)
console.log(arrayTexto[1]); // posição-1

//adicionar elementos em um array
//  no começo (unshift)
arrayTexto.unshift("Tênis");
console.log(arrayTexto);
//  no fim (push)
arrayTexto.push("Chinelo");
console.log(arrayTexto);

//trocar um valor 
arrayTexto[2] = "Sacola";
console.log(arrayTexto);

// Remover Elementos do Array
//no começo (shift)
arrayTexto.shift();
console.log(arrayTexto);
//no fim (pop)
arrayTexto.pop();
console.log(arrayTexto);

//percorrer um Array (laço de repetição) - 
//percorrer o array de números (for)
for(let i =0;i<arrayNumeros.length;i++){
    console.log("índice["+i+"]="+[arrayNumeros[i]])
}

//forEach 
arrayTexto.forEach(elemento => {
    console.log(elemento)
});

// Métodos úteis

// IndexOf
console.log(arrayNumeros.indexOf(5)); //4
console.log(arrayNumeros.indexOf(10)); //-1 (elementos inexistente)

//Splice (remover elementos da posição)
arrayMisto.splice(2,1);
console.log(arrayMisto);

//Operações avançadas de Arrays
// map - novos valores 
let valores = [10, 20, 30, 40, 50];
let valoresDobro = valores.map(x => x*2);
console.log(valoresDobro);
//filter - comparação
let valoresFilter = valores.filter(x => x>25);
console.log(valoresFilter);

//desafio (filtro x<35) && (x*3) = [30, 60, 90]
let valoresDesafio = valores.filter(x=>x<35).map(x=>x*3);

//reduce ([] -> let x)
let soma = valores.reduce((ValorSoma,ValorElemento) => ValorSoma+ValorElemento);
console.log(soma);

//sort (organizar/ordenar)
let aleatorio = [7, 4, 2, 9, 1, 5, 8, 3, 6];
console.log(aleatorio);
let ordenado = aleatorio.sort();
console.log(ordenado);