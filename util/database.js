const Sequelize = require('sequelize');

const sequelize = new Sequelize('learning_node', 'root', 'Hannah903@ophio',{
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;
