const Sequelize = require('sequelize');
const db = require('./db');

const Cadastrar = db.define('Cadastro', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    senha: {
        type: Sequelize.STRING,
        allowNull: false
    },
});



//Criar a tabela no BD
// Cadastrar.sync();

//Verificar se há alguma diferença na tabela, realiza a alteração
//Cadastrar.sync({ alter: true });

//Primeiro apaga a TB, em seguida cria TB
//Cadastrar.sync({ force: true })
module.exports = Cadastrar;