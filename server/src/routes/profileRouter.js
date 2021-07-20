const express = require("express");
const profileRouter = express.Router();
const ProfileController = require("../controllers/profileController");

profileRouter.get("/:id", ProfileController.getProfile);
profileRouter.put("/:id", ProfileController.editProfile);
profileRouter.patch("/:id", ProfileController.editProfileSkills)

module.exports = profileRouter;
