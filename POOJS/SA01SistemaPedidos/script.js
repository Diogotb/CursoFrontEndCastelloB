// Criar a Lógica do sistema de Pedidios

// Modelar as Classes

class Cliente{
    //atributos encapsulados
    #id
    #nome
    #cpf
    //construtor
    constructor(id, nome, cpf){
        this.#id = id;
        this.#nome = nome;
        this.#cpf = cpf;
    }
    //métodos getters and setter
    getId(){
        return this.#id;
    }
    getNome(){
        return this.#nome;
    }
    getCpf(){
        return this.#cpf;
    }
}

class Produto{
    //atributos encapsulados
    #id
    #nome
    #preco
    //construtor
    constructor(id, nome, preco){
        this.#id = id;
        this.#nome = nome;
        this.#preco = preco;
    }
    //métodos publicos
    getId(){
        return this.#id;
    }
    getNome(){
        return this.#nome;
    }
    getPreco(){
        return this.#preco;
    }
}

class Pedido{
    //atributos encapsulados
    #id
    #cliente
    #itens
    #desconto
    #valorTotal
    //cosntrutor
    constructor(id, cliente, itens, desconto){
        this.#id = id;
        this.#cliente = cliente;
        this.#itens = itens;
        this.#desconto = desconto;
        this.#valorTotal = this.calcularValorTotal();
    }
    //métodos publicos
    getId(){
        return this.#id;
    }
    getCliente(){
        return this.#cliente;
    }
    getItens(){
        return this.#itens;
    }
    getDesconto(){
        return this.#desconto;
    }
    getValorTotal(){
        return this.#valorTotal;
    }
    
    calcularValorTotal(){
        let total = this.#itens.reduce((acc, item) => acc + item.produto.getPreco() * item.quantidade);
        total -= ((this.#desconto/100) * total);
    }
}

// criar a classe controller //gerenciar os pedidios

class SistemaPedidos{
    //cosntrutor
    constructor(){
        this.clientes = [];
        this.produtos = [];
        this.pedidos = [];
    }
    //métodos do controller

    cadastrarCliente(){
        const nome = document.getElementById("nomeCliente").value;
        const cpf = document.getElementById("cpfCliente").value;
        if (!nome.trim() || !cpf.trim()) { //verifica se todos os campos estão preenchidos
            alert("Preencha todos os campos!");
            return;
        }
        //instanciar o objeto cliente
        const cliente = new Cliente(this.clientes.length + 1, nome, cpf);
        //adicionar o cliente ao array de cleentes
        this.clientes.push(cliente);
        //limpar os campos do formulário
        document.getElementById("nomeCliente").value = "";
        document.getElementById("cpfCliente").value = "";
        //atualizar a lista de clientes
        this.atualizarClientes();
    }

    atualizarClientes(){
        const lista = document.getElementById("listaClientes");
        lista.innerHTML = "";
        const select = document.getElementById("selectCliente");
        select.innerHTML = "<option value=''>Selecione um Cliente</option>";
        //percorrer o meu array de clientes
        this.clientes.forEach( cliente => {
            const li = document.createElement("li");
            li.textContent = cliente.getNome();
            lista.appendChild(li);
            const option = document.createElement("option");
            option.value = cliente.getId();
            option.textContent = cliente.getNome();
            select.appendChild(option);
        });
    }
}
//instanciar objeto da classe controller
const sistema = new SistemaPedidos();
//adiconar o evento de click no botão
//document.getElementById("cadastrarCliente").addEventListener("click", sistema.cadastrarCliente());