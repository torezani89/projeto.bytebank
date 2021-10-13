export class Conta {
    constructor(cliente, agencia) {
        this._cliente = cliente;
        this.agencia = agencia;
        this._saldo = 0;
        // Transformar a clase Conta numa classe Abstrata com 'throw new Error'.
        // Classes abstratas não podem ser instanciadas diretamente.
        if (this.constructor == Conta) {
            throw new Error ("A classe Conta não deve ser instanciada diretamente");
        }
    }

    /*
    // De onde está vindo 'novoCliente'? A o retirar set cliente, não houve diferença nenhuma no resultado do programa.
    // Pesquisar melhor o uso do método
    set cliente(novoCliente) {
        if(novoCliente instanceof Cliente){
            this._cliente = novoCliente;
        }
    }
    */

    get cliente() {
        return this._cliente;
    }

    get saldo() {
        return this._saldo;
    }

    // Usar na instanciação de uma nova classe.
    // Se necessário, mude a taxa, de acordo com o tipo de conta.
    // sacar(valor){
    //     let taxa = 1;
    //     return this._sacar(valor, taxa);
    // }

    // Método Abstrato: são métodos que devem ser sobrescritos/definidos na instanciação
    // de uma classe filha/herdeira.
    sacar() {
        throw new Error ("O método sacar deve ser sobrescrito pela classe filha");
    }

    _sacar(valor, taxa) {
        const valorSacado = valor * taxa;
        if(this._saldo >= valorSacado) {
            this._saldo = this._saldo - valorSacado;
            return valorSacado;
        } else {
            return 0;
        }
    }

    depositar(valor) {
        if(valor >= 0) {
            this._saldo = this._saldo + valor;
        }
    }

    transferir(valor, conta) {
        if (this.sacar(valor) >= valor) {
            conta.depositar(valor);
        };
        // this.sacar já está sendo executado dentro do 'if'. Se repetirmos ele após o 'if', o saque ficará duplicado.
        // Por isso, não é necessário colocar o this.sacar após encerrar o if.
        // Lembre-se de que o método sacar deve ser definidio na instanciação da classe filha.
    }

}