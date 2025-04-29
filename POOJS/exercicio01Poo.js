//Atividade 1: Criar uma classe representando um produto
// atributos: nome, preço , estoque
// métodos Vender , repor , exibirInfo() 

class Produto{
    //encapsulamento dos atributos
    #nome
    #preco
    #estoque
    //construtor
    constructor(nome, preco, estoque){
        this.#nome = nome;
        this.#preco = preco;
        this.#estoque = estoque;
    }
    //métodos
    vender(quantidade){
        if(this.#estoque >= quantidade){
            this.#estoque -= quantidade;//estoque = estoque - quantidade
            console.log(`Venda realizada com sucesso! Estoque atual: ${this.#estoque}`);
        }else{
            console.log(`Estoque insuficiente!, Estoque atual : ${this.#estoque}`);
        }
    }
    
    repor(quantidade){
        this.#estoque += quantidade; //estoque = estoque + quantidade
        console.log(`Estoque Reposto!, Estoque atual : ${this.#estoque}`);
    }

    exibirInfo(){
        console.log(`Nome: ${this.#nome}, Preço: ${this.#preco}, Estoque: ${this.#estoque}`);
    }
}
//instanciar os objetos
let produto1 = new Produto("Arroz", 30, 100);
produto1.exibirInfo();
produto1.vender(10);
produto1.exibirInfo();
produto1.vender(200);
produto1.repor(50);
produto1.exibirInfo();