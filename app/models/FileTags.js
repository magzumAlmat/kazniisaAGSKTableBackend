const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db');

const FileTag = sequelize.define('FileTag', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  FileId: {
    type: DataTypes.UUID,
    references: {
      model: 'File', // Ссылка на таблицу Files
      key: 'id',
    },
  },
  TagId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Tags', // Ссылка на таблицу Tags
      key: 'id',
    },
  },
});

module.exports = FileTag;