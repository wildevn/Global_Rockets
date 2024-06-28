const Sequelize = require('sequelize');
const db = require('./db');

const Mercado = db.define('Mercado', {
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
});

//Criar a tabela no BD
//Mercado.sync();

//Verificar se há alguma diferença na tabela, realiza a alteração
//Mercado.sync({ alter: true });

//Primeiro apaga a TB, em seguida cria TB
//Mercado.sync({ force: true })
module.exports = Mercado;