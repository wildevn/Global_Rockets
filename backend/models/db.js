const Sequelize = require('sequelize');

const sequelize = new Sequelize('GlobalRockets', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate()
.then(() => {
    console.log("Conexão com o banco de dados realizada com sucesso!");
}).catch(() => {
    console.log("Erro: Conexão com o banco de dados não realizada com sucesso!");
});

module.exports = sequelize;