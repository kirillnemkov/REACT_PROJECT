const Project = require("../models/project-model");
const Comment = require("../models/comment-model");
const treelize = require('../service/helper-service')

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
      const project = await Project.findById(req.params.id).populate("creators");
      if (!project.likes.includes(req.body.id) && req.body.id) {
        const projectWithUpdatedLikes = await Project.findByIdAndUpdate(req.params.id, { $push: { likes: { $each: [req.body.id] } } }, { new: true }).populate(
          "creators"
        );
        return res.json(projectWithUpdatedLikes)
      } else {
        const projectWithUpdatedLikes = await Project.findByIdAndUpdate(req.params.id, { $pull: { likes: req.body.id } }, { new: true }).populate("creators");
        return res.json(projectWithUpdatedLikes)
      }
    } catch (err) {
      next(err);
    }
  }

  async updateViewsProject(req, res, next) {
try {
  const {projectId} = req.params
  const {userIp: userId} = req.body
  const project = await Project.findById(projectId).populate("creators");
  if(!project.views.includes(userId)) {
    const projectWithUpdatedViews = await Project.findByIdAndUpdate(
      projectId,
      { $push: { views: userId } },
      { new: true }
      ).populate("creators");
      return res.json(projectWithUpdatedViews)
    } else {
    return res.json(project)
  }
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

  async getComment(req, res, next) {
    try {
      const { id } = req.params
      const {userId} = req.body
      const project = await Project.findById(id)
      const b = project.comments
      console.log(b)
    } catch (err) {
      next(err);
    }
  }

  async createComment(req, res, next) {
    try {
      const {projectId} = req.params;
      const {authorId, text, parentId} = req.body
      if (parentId.length === 0) {
        await Comment.create({authorId, text, projectId});
      } else if (parentId.length !== 0) {
        await Comment.create({authorId, text, projectId, parentId});
      }
      const allCurrentProjectComments = await Comment.find({projectId}).populate('parentId').populate('authorId')
      const a = allCurrentProjectComments.map(item => item.toJSON())
      const structuredComments = await treelize(a);
      return res.json(structuredComments)
    } catch (err) {
      next(err);
    }
  }

  async editProject(req, res, next) {
    try {
      const { id } = req.params;
      const updatedProject = await Project.findOneAndReplace(
        { _id: id },
        req.body,
        { new: true }
      );
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

  async uploadProjectImg(req, res, next) {
    try {
      const { fileInfo } = req.body;
      await User.findByIdAndUpdate(id, { image: req.body.url });
      return res.json({ url: req.body.url });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new ProjectController();
