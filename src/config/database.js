const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('prova_final_jk', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
});

module.exports = sequelize;