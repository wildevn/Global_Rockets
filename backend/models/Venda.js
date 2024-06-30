const Sequelize = require('sequelize');
const db = require('./db');

const user = require('./Cadastrar');
const prod = require('./Produto');
const { FOREIGNKEYS } = require('sequelize/lib/query-types');


const venda = db.define('Venda', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
 /*   num_venda: {
        type: Sequelize.INTEGER,
        allowNull: false
    },*/
    id_produto: {
        type: Sequelize.INTEGER,
        allowNull: false,
 /*       references: {
            model: 'Produto', // nome da tabela de onde vem a chave estrangeira
            key: 'id' // campo na tabela referenciada
        }*/
    },
    id_usuario:{
        type: Sequelize.INTEGER,
        allowNull: false,
/*        references:{
            model: 'Cadastro', // nome da tabela de onde vem a chave estrangeira
            key: 'id' // campo na tabela referenciada
        }*/
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
//venda.sync();

//Verificar se há alguma diferença na tabela, realiza a alteração
//venda.sync({ alter: true });

//Primeiro apaga a TB, em seguida cria TB
//venda.sync({ force: true })
module.exports = venda;