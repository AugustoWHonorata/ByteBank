import { Cliente } from "./Cliente.js"
import { Gerente } from "./funcionarios/gerente.js"
import { Diretor } from "./funcionarios/Diretor.js"
import { SistemaAutenticacao } from "./SistemaAutenticao.js"


const diretor  = new Diretor("Rodrigo", 10000, 12345678900)
diretor.cadastrarSenha("123456")
const gerente = new Gerente ("Ricardo", 5000, 12345678901)
gerente.cadastrarSenha("567890")
const cliente = new Cliente("lais", 12345678909, "234")
const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123456");
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "567890");

const clienteEstaLogado = SistemaAutenticacao.login(cliente, "234");
console.log(clienteEstaLogado)
