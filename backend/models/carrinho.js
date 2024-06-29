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
        FOREIGNKEYS : true,
        allowNull: false
    },
    userId: {
        type: Sequelize.INTEGER,
        FOREIGNKEYS : true,
        allowNull: false
    },
});

//Criar a tabela no BD
//carrinho.sync();

//Verificar se há alguma diferença na tabela, realiza a alteração
//carrinho.sync({ alter: true });

//Primeiro apaga a TB, em seguida cria TB
//carrinho.sync({ force: true })
module.exports = carrinho;