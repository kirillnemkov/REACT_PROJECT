const User = require("../models/user-model");

class ProfileController {
  async getProfile(req, res, next) {
    try {
      console.log(req.params);
      const oneUser = await User.find(req.params);
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
      const { name } = req.body;
      const editUser = await User.findByIdAndUpdate(id, { name }, { new: true });
      return res.json(editUser);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new ProfileController();
