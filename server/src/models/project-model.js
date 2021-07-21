const mongoose = require("mongoose");

const ProjectSchema = mongoose.Schema({
  title: { type: String},
  // team: { type: mongoose.Schema.Types.ObjectId, ref: "Team" },
  creators: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  description: { type: String },
  gitHub: { type: String },
  website: { type: String },
  twitter: { type: String },
  instagram: { type: String },
  facebook: { type: String },
  image: [{ type: String }],
  date: { type: String },
  hashtags: [{ type: String }],
  views: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
});

module.exports = mongoose.model("Project", ProjectSchema);
