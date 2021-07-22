const Project = require("../models/project-model");
const Comment = require("../models/comment-model");

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

  async createComment(req, res, next) {
    try {
      const newComment = await Comment.create({ title: req.body.input, author: req.body.user.id, project: req.params.id });
      const project = await Project.findByIdAndUpdate(req.params.id, { $push: { comments: { $each: [newComment._id] } } }, { new: true }).populate("creators").populate("comments")
      const allComment = await Comment.find({author: req.body.user.id}).populate("author")
      return res.json(allComment);
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
