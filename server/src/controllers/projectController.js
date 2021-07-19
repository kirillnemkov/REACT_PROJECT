const Project = require("../models/project-model");

class ProjectController {
  async getOneProjects(req, res, next) {
    try {
      const { id } = req.params;
      const project = await Project.findById(id).populate("creators");
      return res.json(project);
    } catch (err) {
      next(err)
    }
  }
    async getAllProjects(req, res, next) {
    try {
      const projects = await Project.find();
      // console.log(projects);
      return res.json(projects);
    } catch (err) {
      next(err)
    }
  }

  async createProject(req, res, next) {
    try {
      const newProject = await Project.create(req.body)
      return res.json(newProject);
    } catch (err) {
      next(err)
    }
  }

    async editProject(req, res, next) {
    try {
      const { id } = req.params;
      const updatedProject = await Project.findOneAndReplace({ _id : id }, req.body, { new: true } );
      return res.json(updatedProject);
    } catch (err) {
      next(err);
    }
  }

  async deleteProject(req, res, next) {
    try {
      const { id } = req.params;
      await Project.findByIdAndDelete(id);
      return res.sendStatus(200);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new ProjectController();
