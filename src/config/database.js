const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('Atividade_Final_JK', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
});

module.exports = sequelize;