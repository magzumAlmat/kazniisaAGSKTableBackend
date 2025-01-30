const File = require("./File");
const Tag = require("./Tags");
const FileTag = require("./FileTag");

// Связь многие-ко-многим между File и Tag через FileTag
File.belongsToMany(Tag, { through: FileTag });
Tag.belongsToMany(File, { through: FileTag });

module.exports = {
  File,
  Tag,
  FileTag,
};