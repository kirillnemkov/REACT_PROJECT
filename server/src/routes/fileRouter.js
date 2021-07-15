const express = require("express");
const fileRouter = express.Router();
const FilesController = require("../controllers/filesController");

fileRouter.post("/newFile", FilesController.uploadFile);
// fileRouter.patch('/file', FilesController.editData);
fileRouter.delete("/file", FilesController.deleteFile);

module.exports = fileRouter;
