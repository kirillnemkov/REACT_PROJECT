const mongoose = require("mongoose");

const ProjectSchema = mongoose.Schema({
  title: { type: String, required: true },
  // team: { type: mongoose.Schema.Types.ObjectId, ref: "Team" },
  creators: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  likes: { type: Number },
  description: { type: String },
  gitHub: { type: String },
  website: { type: String },
  twitter: { type: String },
  instagram: { type: String },
  facebook: { type: String },
  image: { type: String },
  date: { type: String },
  hashtags: [{ type: String }],
  views: { type: Number }
});

module.exports = mongoose.model("Project", ProjectSchema);
