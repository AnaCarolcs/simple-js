import { Cliente } from "./Conta/Cliente.js";
import { Diretor } from "./Funcionario/Diretor.js";
import { Gerente } from "./Funcionario/Gerente.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor("Ana", 10000, 1234567890);
diretor.cadastrarSenha("1234");

const gerente = new Gerente("Carol", 5000, 987654321);
gerente.cadastrarSenha("123");

const cliente = new Cliente("maria", 9284757394, "234");



const gerenteEstaLogado = SistemaAutenticacao.login(diretor, "1234");
const diretorEstaLogado = SistemaAutenticacao.login(gerente, "123");
const clienteEstaLogado = SistemaAutenticacao.login(cliente, "234");

console.log(gerenteEstaLogado, diretorEstaLogado, clienteEstaLogado);