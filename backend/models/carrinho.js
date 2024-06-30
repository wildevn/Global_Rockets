const Sequelize = require('sequelize');
const db = require('./db');

const user = require('./Cadastrar');
const prod = require('./Produto');
const { FOREIGNKEYS } = require('sequelize/lib/query-types');

const carrinho = db.define('Carrinho', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    prodId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'Produto', // nome da tabela de onde vem a chave estrangeira
            key: 'id' // campo na tabela referenciada
        }
    },
    userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'Cadastro', // nome da tabela de onde vem a chave estrangeira
            key: 'id' // campo na tabela referenciada
        }
    },
    quantidade: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    valor: {
        type: Sequelize.FLOAT,
        allowNull: false
}
});

//Criar a tabela no BD
carrinho.sync();

//Verificar se há alguma diferença na tabela, realiza a alteração
//carrinho.sync({ alter: true });

//Primeiro apaga a TB, em seguida cria TB
//carrinho.sync({ force: true })
module.exports = carrinho;