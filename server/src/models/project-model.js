const mongoose = require("mongoose");

const ProjectSchema = mongoose.Schema({
  name: { type: String, required: true },
  // team: { type: mongoose.Schema.Types.ObjectId, ref: "Team" },
  users: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  likes: { type: Number },
  about: { type: String },
  gitHub: { type: String },
  url: { type: String },
  twitter: { type: String },
  instagram: { type: String },
  facebook: { type: String },
  image: { type: String },
  date: { type: String },
});

module.exports = mongoose.model("Project", ProjectSchema);
