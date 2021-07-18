const express = require("express");
const projectRouter = express.Router();
const ProjectController = require("../controllers/projectController");

projectRouter.get('/:id', ProjectController.getProject)
projectRouter.post('/', ProjectController.createProject)
projectRouter.put('/:id', ProjectController.editProject)
projectRouter.delete('/:id', ProjectController.deleteProject)


module.exports = projectRouter;
