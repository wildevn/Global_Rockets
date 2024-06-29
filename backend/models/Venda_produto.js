const Sequelize = require('sequelize');
const db = require('./db');

const Mercado = db.define('Venda_Produto', {
    id_venda: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'Venda', // nome da tabela de onde vem a chave estrangeira
            key: 'id_venda' // campo na tabela referenciada
        }
    },
    id_produto: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'Produto', // nome da tabela de onde vem a chave estrangeira
            key: 'id' // campo na tabela referenciada
        }
    }
});

//Criar a tabela no BD
//Venda_Produto.sync();

//Verificar se há alguma diferença na tabela, realiza a alteração
//Venda_Produto.sync({ alter: true });

//Primeiro apaga a TB, em seguida cria TB
//Venda_Produto.sync({ force: true })
module.exports = Venda_Produto;