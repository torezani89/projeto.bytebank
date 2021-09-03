export class sistemaAutenticacao {
    // Se remover o static, o index não consegue chamar o método 'login'.
    static login(autenticavel, senha){
    // Ser autenticavel significa ter o método 'autenticar'.
    // Qualquer objeto que tiver o método 'autenticar' poderá utilizar o método 'sistemaAutenticacao'
        if(sistemaAutenticacao.ehAutenticavel(autenticavel)) {
            return autenticavel.autenticar(senha);
        }
        return false
    }

    static ehAutenticavel(autenticavel) {
    /* Se autenticavel possuir o método 'autenticar', o return será true. 
    É necessário também verificar se 'autenticar' é um método (function) e não uma simples propriedade.
    Caso contrário, seria retornado 'true' pelo método ehAutenticavel, mesmo que fosse apenas uma propriedade e,
    ao entrar no if do método 'login', daria o erro: "autenticavel.autenticar is not a function".
    Com isso, se autenticar for uma propriedade, ehAtutenticavel retornará 'false' e, portanto,
    o if de 'login' não será excutado, retornando 'false', ao invés do erro acima.
    */
        return "autenticar" in autenticavel &&
        autenticavel.autenticar instanceof Function
    }
 

}