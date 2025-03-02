import banco from "../config/banco.js";

const Pessoa = banco.sequelize.define("pessoas", {
  id: {
    type: banco.Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nome: {
    type: banco.Sequelize.STRING(100),
  },
  telefone: {
    type: banco.Sequelize.STRING(20),
  },
  email: {
    type: banco.Sequelize.STRING(100),
    unique: true,
    allowNull: false,
  },
  cpf: {
    type: banco.Sequelize.STRING(20),
    unique: true,
    allowNull: false,
  },
});
// cria a tabela do banco de dados(nome da tabela, campos da tabela)

Pessoa.sync();

export default Pessoa;
