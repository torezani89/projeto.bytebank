import {Conta} from "./Conta.js"

export class ContaCorrente extends Conta {
    static numeroDeContas = 0;
    // agencia;
    // #saldo = 0 https://github.com/tc39/proposal-class-fields#private-fields
    // _cliente;
    // _saldo = 0;

    constructor(cliente, agencia) {
        super(cliente, agencia);
        this.tipo = "corrente";
        ContaCorrente.numeroDeContas = ContaCorrente.numeroDeContas + 1;
    }

    sacar(valor) {
        let taxa = 1.02;
        return this._sacar(valor, taxa);
    }

}