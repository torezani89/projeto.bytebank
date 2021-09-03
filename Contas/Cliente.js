// Quando criamos um arquivo novo para uma classe, o nome deve começar com maiúscula
export class Cliente{
    // nome;
    // _cpf;
    
    constructor(nome, cpf, senha) {
        this.nome = nome;
        this._cpf = cpf;
        this._senha = senha;
    }

    get cpf() {
        return this._cpf;
    }

    get senha() {
        return this._senha;
    }

    autenticar(senha) {
        return this._senha == senha;
    }

}