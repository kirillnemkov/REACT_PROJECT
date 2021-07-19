const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  username: { type: String, unique: true, required: true },
  email: { type: String, unique: true, require: true },
  password: { type: String, require: true },
  isActivated: { type: Boolean, default: false },
  activationLink: { type: String },
  lastName: { type: String },
  firstName: { type: String },
  middleName: { type: String },
  // isfollow: [ { type : mongoose.Schema.Types.ObjectId, ref: "Team"}],
  isfavourite: [{ type: mongoose.Schema.Types.ObjectId, ref: "Project" }],
  about: { type: String },
  location: { type: String },
  job: { type: String },
  image: { type: String },
  skills: {
    Javascript: Number,
    NodeJS: Number,
    Vue: Number, 
    React: Number,
    Angular: Number,
    HBS: Number,
    Pyton: Number,
    Haskell: Number,
  }, 
  gitHub: { type: String },
  twitter: { type: String },
  instagram: { type: String },
  facebook: { type: String },
});

module.exports = mongoose.model("User", UserSchema);
