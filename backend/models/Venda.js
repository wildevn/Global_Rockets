const Sequelize = require('sequelize');
const db = require('./db');

const Mercado = db.define('Venda', {
    id_venda: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    id_usuario:{
        model: 'Cadastro', // nome da tabela de onde vem a chave estrangeira
        key: 'id' // campo na tabela referenciada
    },
    ind_vendido: {
        type: Sequelize.INTEGER,
    },
    valor_total: {
        type: Sequelize.FLOAT,
        allowNull: false
    }
});

//Criar a tabela no BD
//Venda.sync();

//Verificar se há alguma diferença na tabela, realiza a alteração
//Venda.sync({ alter: true });

//Primeiro apaga a TB, em seguida cria TB
//Venda.sync({ force: true })
module.exports = Venda;