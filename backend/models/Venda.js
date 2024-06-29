const Sequelize = require('sequelize');
const db = require('./db');

const Mercado = db.define('Venda_Produto', {
    id_venda: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    id_usuario: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: false
    },
    ind_vendido: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
    },
    valor_total: {
        type: Sequelize.FLOAT,
        allowNull: false
    }
});

//Criar a tabela no BD
//Venda_Produto.sync();

//Verificar se há alguma diferença na tabela, realiza a alteração
//Venda_Produto.sync({ alter: true });

//Primeiro apaga a TB, em seguida cria TB
//Venda_Produto.sync({ force: true })
module.exports = Venda_Produto;