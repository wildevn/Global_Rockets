const Sequelize = require('sequelize');
const db = require('./db');

const Produto = db.define('Produto', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    marca: {
        type: Sequelize.STRING,
        allowNull: false
    },
    quantidade: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    preco: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    descricao: {
        type: Sequelize.STRING,
        allowNull: true
    },
    vendidoPor:{
        type: Sequelize.STRING,
        allowNull: true
    },
});

//Criar a tabela no BD
//Produto.sync();

//Verificar se há alguma diferença na tabela, realiza a alteração
//Produto.sync({ alter: true });

//Primeiro apaga a TB, em seguida cria TB
//Produto.sync({ force: true })
module.exports = Produto;