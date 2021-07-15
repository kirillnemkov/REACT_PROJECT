const fileService = require("../service/file-service");
const path = require("path");

class FilesController {
  async uploadFile(req, res) {
    try {
      const { userId, fileInfo } = req.body;
      const fileData = await fileService.uploadFile(fileInfo, userId);
      return res.status(200).json(fileData);
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  }

  // async editData (req, res) {
  //   try {

  //   }
  // }

  async deleteFile(req, res) {
    const { id } = req.body;
    const status = await fileService.deleteFile(id);
    if (status === 200) {
      return res.sendStatus(200);
    }
    res.status(500).json(err);
  }
}

module.exports = new FilesController();
