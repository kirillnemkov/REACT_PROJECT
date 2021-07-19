module.exports = class UserDto {
  email;
  id;
  isActivated;
  skills;

  constructor(model) {
    this.email = model.email;
    this.id = model._id;
    this.isActivated = model.isActivated;
    this.skills = model.skills
  }
};
