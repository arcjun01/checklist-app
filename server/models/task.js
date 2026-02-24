module.exports = (sequelize) => {
  const { DataTypes } = require('sequelize');
  const Task = sequelize.define('Task', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING, allowNull: false },
    priority: { type: DataTypes.INTEGER, defaultValue: 0 },
  });
  return Task;
};
