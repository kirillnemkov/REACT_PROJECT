const Project = require("../models/project-model");

class ProjectController {
  async getOneProjects(req, res, next) {
    try {
      const { id } = req.params;
      const project = await Project.findById(id).populate("creators");
      const projects = await Project.find({ date: project.date });
      return res.json({ project, projects });
    } catch (err) {
      next(err);
    }
  }
  async getAllProjects(req, res, next) {
    try {
      const projects = await Project.find();
      return res.json(projects);
    } catch (err) {
      next(err);
    }
  }

  async getLikeForProjects(req, res, next) {
    try {
      const project = await Project.findById(req.params.id);
      const result = project.likes.includes(req.body.id);
      let newProject = "";
      if (!result) {
        newProject = await Project.findByIdAndUpdate(req.params.id, { $push: { likes: { $each: [req.body.id] } } }, { new: true });
      } else {
        newProject = await Project.findByIdAndUpdate(req.params.id, { $pull: { likes: req.body.id } }, { new: true });
      }
      return res.json(newProject);
    } catch (err) {
      next(err);
    }
  }

  async createProject(req, res, next) {
    try {
      const newProject = await Project.create(req.body);
      return res.json(newProject);
    } catch (err) {
      next(err);
    }
  }

  async editProject(req, res, next) {
    try {
      const { id } = req.params;
      const updatedProject = await Project.findOneAndReplace({ _id: id }, req.body, { new: true });
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
