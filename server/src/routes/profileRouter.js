const express = require("express");
const profileRouter = express.Router();
const ProfileController = require("../controllers/profileController");

// profileRouter.post("/", ProfileController.createProfile);
// profileRouter.post('/info', ProfileController)
profileRouter.get("/:id", ProfileController.getProfile);
profileRouter.put("/:id", ProfileController.editProfile);

module.exports = profileRouter;
