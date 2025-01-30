const  Tag  = require("../models/Tags"); // Импортируем модель Tag
const File  =require("../models/File")
const FileTag = require("../models/FileTags")
const createTag = async (req, res) => {
  try {
    const { name } = req.body; // Получаем название тега из тела запроса

    console.log('name from req body= ',req.body.name)
    // Проверяем, передано ли название тега
    if (!name) {
      return res.status(400).json({ message: "Tag name is required." });
    }

    // Создаем новый тег
    const tag = await Tag.create({ name });

    // Возвращаем успешный ответ с созданным тегом
    res.status(201).json({
      message: "Tag created successfully!",
      tag,
    });
  } catch (error) {
    console.error("Error creating tag:", error);

    // Обработка ошибки уникальности (если тег с таким именем уже существует)
    if (error.name === "SequelizeUniqueConstraintError") {
      return res.status(400).json({ message: "Tag with this name already exists." });
    }

    // Обработка других ошибок
    res.status(500).json({ message: "Failed to create tag." });
  }
};




const addTagToFile = async (req, res) => {
    try {
      const { fileId, tagId } = req.body; // Получаем fileId и tagId из тела запроса
  
      // Проверяем, переданы ли fileId и tagId
      if (!fileId || !tagId) {
        return res.status(400).json({ message: "fileId and tagId are required." });
      }
  
      // Проверяем, существует ли файл
      const file = await File.findByPk(fileId);
      if (!file) {
        return res.status(404).json({ message: "File not found." });
      }
  
      // Проверяем, существует ли тег
      const tag = await Tag.findByPk(tagId);
      if (!tag) {
        return res.status(404).json({ message: "Tag not found." });
      }
  
      // Проверяем, не привязан ли уже этот тег к файлу
      const existingFileTag = await FileTag.findOne({
        where: { FileId: fileId, TagId: tagId },
      });
  
      if (existingFileTag) {
        return res.status(400).json({ message: "This tag is already attached to the file." });
      }
  
      // Создаем связь между файлом и тегом
      await FileTag.create({ FileId: fileId, TagId: tagId });
  
      // Возвращаем успешный ответ
      res.status(201).json({
        message: "Tag added to file successfully!",
        fileId,
        tagId,
      });
    } catch (error) {
      console.error("Error adding tag to file:", error);
      res.status(500).json({ message: "Failed to add tag to file." });
    }
  };
  
module.exports = {createTag,addTagToFile};