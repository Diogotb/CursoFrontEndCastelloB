//Atividade 3: Criar uma classe representando uma conta bancária

class ContaBancaria{
    //encpsular os atributos
    #titular
    #saldo
    //cosntrutor
    constructor(titular){
        this.#titular = titular;
        this.#saldo = 0; //inicia a Conta = 0
    }
    //métodos
    depositar(valor){
        if(valor > 0){
            this.#saldo +=valor; 
            console.log('Deposito realizado com Sucesso!')
        }else{
            console.log(`Valor inválido para deposito!`);
        }
    }

    sacar(valor){
        if(valor > 0 && valor <= this.#saldo){
            this.#saldo -= valor;
            console.log("Saque Realizado com Sucesso!");
        }else if(valor > this.#saldo){ //if else encadeado
            console.log('Saldo insuficiente!');
        }else{
            console.log('Valor inválido para saque!');
        } 
    }

    exibirSaldo(){
        console.log(`Titular: ${this.#titular}, Saldo: R$ ${this.#saldo}`);
    }
}

//instanciar os objetos
let conta1 = new ContaBancaria("José Pereira");
conta1.depositar(1000);
conta1.exibirSaldo();
conta1.sacar(500);
conta1.exibirSaldo();
conta1.sacar(600);//erro
conta1.exibirSaldo();
