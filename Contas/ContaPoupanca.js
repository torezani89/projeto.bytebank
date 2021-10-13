import { Conta } from "./Conta.js";

export class ContaPoupanca extends Conta {

    constructor(cliente, agencia) {
        // O 'super' chama o método constructor da classe mãe.
        super(cliente, agencia)
        this.tipo = "poupanca";
        // this.rendimento = calcRendimento(0.05); não funcionou
        // this.rendimento não está fazendo o cálculo. Retorna 0.
    }

}

// function calcRendimento(taxa) {
//     var valorRendimento = ContaPoupanca._saldo * taxa;
//     return valorRendimento;
// }