const { DataTypes } = require("sequelize");
const sequelize = require("../../config/db"); // Убедитесь, что путь правильный

const Tag = sequelize.define("Tag", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});

module.exports = Tag; // Экспортируем модель