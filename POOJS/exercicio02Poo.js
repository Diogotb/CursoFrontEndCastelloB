//Atividade 2: Criar uma classe representando um veículo

class Veiculo {
    //encpsular os atributos
    #marca
    #modelo
    #ano

    //construtor
    constructor(marca, modelo, ano){
        this.#marca = marca;
        this.#modelo = modelo;
        this.#ano = ano;
    }
    //método
    exibirInfo(){
        console.log(`Marca: ${this.#marca}, Modelo: ${this.#modelo}, Ano: ${this.#ano}`);
    }
}

//subClasse Carro

class Carro extends Veiculo{
    //Encapsular os atributos
    #qtdPortas
    //cosntrutor
    constructor(marca, modelo, ano, qtdPortas){
        super(marca, modelo, ano); //chama o construtor da superclasse
        this.#qtdPortas = qtdPortas;
    }
    //método
    exibirInfo(){
        super.exibirInfo(); //chama da super
        console.log(`Quantidade de Portas: ${this.#qtdPortas}`);
    }
}

//instanciar um objeto

let carro1 = new Carro("Fiat", "Uno", 1994, 2);
carro1.exibirInfo();