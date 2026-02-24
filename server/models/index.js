const { Sequelize } = require('sequelize');
const path = require('path');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: path.join(__dirname, '../../dev.sqlite'),
  logging: false,
});

const Task = require('./task')(sequelize);

module.exports = { sequelize, Task };
