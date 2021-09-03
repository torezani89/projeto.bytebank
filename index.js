import {Cliente} from "./Contas/Cliente.js";
import {ContaCorrente} from "./Contas/ContaCorrente.js";
import {ContaPoupanca} from "./Contas/ContaPoupanca.js";
import {Conta} from "./Contas/Conta.js"
import{Gerente} from "./Funcionarios/Gerente.js"
import{Diretor} from "./Funcionarios/Diretor.js"
import {sistemaAutenticacao} from "./Funcionarios/Autenticacao.js"

// este programa deve ser executado no PowerShell.

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< CLIENTES >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

const cliente1 = new Cliente("Ricardo", 11122233309);
// 
// cliente1.nome = "Ricardo";
// cliente1.cpf = 11122233309;

const cliente2 = new Cliente("Alice", 88822233309);
// cliente2.nome = "Alice";
// cliente2.cpf = 88822233309;

const cliente3 = new Cliente("Ana", 55577744466, 789456);

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< CONTAS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

const contaCorrente1 = new ContaCorrente(cliente1,1001);
// contaCorrente1.cliente = cliente1;
// contaCorrente1.agencia = 1001;

const contaPoupanca1 = new ContaPoupanca(cliente1,1001)

const contaCorrente2 = new ContaCorrente(cliente2,1002);
// contaCorrente2.cliente = cliente2;
// contaCorrente2.agencia = 1002;

// const Conta1 = new Conta(cliente1,1001); executará o método 'throw new Error' do constructor da classe Conta
// que é uma Classe Abstrata

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< OPERACOES >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

contaCorrente1.depositar(800);
contaCorrente1.sacar(100);
contaCorrente1.transferir(300, contaCorrente2)
contaPoupanca1.depositar(500);

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< FUNCIONARIOS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

const Diretor1 = new Diretor("Bruno", 11155588877, 20000);
// Não é possível declarar a const com maiúscula, pois já existe a classe 'Diretor'
Diretor1.cadastrarSenha("123456");

const Gerente1 = new Gerente("Carolina", 22266677744, 10000);
Gerente1.cadastrarSenha("654321");


// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< AUTENTICACAO >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

const autenticaDiretor = sistemaAutenticacao.login(Diretor1, 123456);
const autenticaGerente = sistemaAutenticacao.login(Gerente1, 654322);

const autenticaCliente = sistemaAutenticacao.login(cliente3, 789456);


// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< CONSOLE.LOG >>>>>>>>>>>>>>>>>>>>>>>>>>>


console.log(contaCorrente1);
console.log(contaPoupanca1);
console.log(contaCorrente2);

console.log("Número de Contas Correntes: " + ContaCorrente.numeroDeContas);

console.log(Diretor1);
console.log(Gerente1);
console.log(autenticaDiretor, autenticaGerente);

console.log(autenticaCliente);



