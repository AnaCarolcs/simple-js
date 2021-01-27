import {Cliente} from "./Cliente.js"
import { Conta } from "./Conta.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";
import { ContaSalario } from "./ContaSalario.js";

const cliente1 = new Cliente("Ana", 11122233309);
const cliente2 = new Cliente("Carol", 88822233309);

const conta1 = new ContaCorrente(cliente2, 1002);
const conta2 = new ContaPoupanca(50, cliente1, 1001);
const conta3 = new ContaSalario(cliente1, 1001)


console.log(conta1);
console.log(conta2);
console.log(conta3);