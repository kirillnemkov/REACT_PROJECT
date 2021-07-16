const express = require("express");
const projectRouter = express.Router();
const ProjectController = require("../controllers/projectController");

projectRouter.post('/', ProjectController.createProject)
projectRouter.get('/:id', ProjectController.getProject)
projectRouter.put('/:id', ProjectController.editProject)
projectRouter.delete('/:id', ProjectController.deleteProject)


module.exports = projectRouter;
