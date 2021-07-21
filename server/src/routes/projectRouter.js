const express = require("express");
const projectRouter = express.Router();
const ProjectController = require("../controllers/projectController");

projectRouter.post('/newProject', ProjectController.createProject)
projectRouter.put('/:id/comment', ProjectController.createComment)
projectRouter.get('/', ProjectController.getAllProjects)
projectRouter.get('/:id', ProjectController.getOneProjects)
projectRouter.patch('/:id', ProjectController.getLikeForProjects)
projectRouter.put('/:id', ProjectController.editProject)
projectRouter.delete('/:id', ProjectController.deleteProject)
// profileRouter.post("/", ProfileController.uploadProjectImg);



module.exports = projectRouter;
