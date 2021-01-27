import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente("Ana", 11122233309);
const cliente2 = new Cliente("Carol", 88822233309);

const conta1 = new ContaCorrente(cliente1, 1001);
const conta2 = new ContaCorrente(cliente2, 1002);

//console.log(conta1);
conta1.depositar(500);
//console.log(conta2);

let valor = 200;
conta1.transferir(valor, conta2);

console.log(conta1);
console.log(ContaCorrente.numeroDeContas);