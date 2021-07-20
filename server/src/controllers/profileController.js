const User = require("../models/user-model");

class ProfileController {
  async getProfile(req, res, next) {
    try {
      const { id } = req.params;
      const oneUser = await User.findById(id);
      return res.json(oneUser);
    } catch (err) {
      next(err);
    }
  }

  async editProfile(req, res, next) {
    try {
      const { id } = req.params;
      const editUser = await User.findOneAndReplace({ _id: id }, req.body, { new: true });
      return res.json(editUser);
    } catch (err) {
      next(err);
    }
  }

  async editProfileSkills(req, res, next) {
    try {
      const { id } = req.params;
      const editUserSkills = await User.findByIdAndUpdate(id, { skills: req.body }, { new: true });
      // console.log(editUserSkills);
      return res.json(editUserSkills);
    } catch (err) {
      next(err);
    }
  }

  async uploadProfileImg(req, res, next) {
    try {
      const { id } = req.params;
      await User.findByIdAndUpdate(id, { image: req.body.url });
      return res.json({ url: req.body.url });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new ProfileController();
