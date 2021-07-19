const express = require("express");
const projectRouter = express.Router();
const ProjectController = require("../controllers/projectController");

projectRouter.post('/newProject', ProjectController.createProject)
projectRouter.get('/', ProjectController.getAllProjects)
projectRouter.get('/:id', ProjectController.getOneProjects)
projectRouter.put('/:id', ProjectController.editProject)
projectRouter.delete('/:id', ProjectController.deleteProject)



module.exports = projectRouter;
