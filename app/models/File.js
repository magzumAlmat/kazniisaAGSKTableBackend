const { DataTypes } = require("sequelize");
const sequelize = require("../../config/db");
const Tag=require('./Tags')


const FileTag = require('./FileTags');
const File = sequelize.define("File", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  path: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  mimetype: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
File.belongsToMany(Tag, { through: FileTag });
Tag.belongsToMany(File, { through: FileTag });
module.exports = File;
