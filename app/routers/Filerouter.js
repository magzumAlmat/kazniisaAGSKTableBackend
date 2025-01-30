const express = require("express");
const { 
  uploadFile, 
  listFiles, 
  getFileById, 
  updateFile, 
  deleteFile 
} = require("../controllers/Filecontroller");
const {createTag,addTagToFile} = require("../controllers/CreateTags")
const upload = require("../../config/multer");
const File= require('../../app/models/File')
const router = express.Router();


router.post('/addtagtofile',addTagToFile)
router.post("/createtag", createTag);

// Create
router.post("/upload", upload.single("file"), uploadFile);

// Read All
router.get("/files", listFiles);

// Read One
router.get("/files/:id", getFileById);


// Update
// Update a file (metadata or replace file)
router.put("/files/:id", upload.single("file"), updateFile);

// Delete
router.delete("/files/:id", deleteFile);

module.exports = router;
