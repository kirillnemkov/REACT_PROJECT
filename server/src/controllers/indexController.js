const Project = require("../models/project-model")

class IndexController {
  async index(req, res, next) {
    try {
      const project = await Project.find()
      console.log(project);
      return res.json(project)
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new IndexController();
