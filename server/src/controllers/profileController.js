const User = require("../models/user-model");

class ProfileController {
  async getProfile(req, res, next) {
    try {
      console.log(req.params);
      const { id } = req.params;
      const oneUser = await User.findById(id);
      return res.json(oneUser);
    } catch (err) {
      next(err);
    }
  }
  async createProfile(req, res, next) {
    try {
      console.log(req.body);
      const newUser = await User.create(req.body);
      return res.json(newUser);
    } catch (err) {
      next(err);
    }
  }
  async editProfile(req, res, next) {
    try {
      console.log(req.body);
      console.log(req.params);
      //нужно поправить данные на основании формы с фронта
      const { id } = req.params;
      const { username } = req.body;
      const editUser = await User.findByIdAndUpdate(id, { username }, { new: true });
      return res.json(editUser);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new ProfileController();
