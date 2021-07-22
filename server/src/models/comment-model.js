const mongoose = require("mongoose");

const CommentSchema = mongoose.Schema({
  author: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  project: { type: mongoose.Schema.Types.ObjectId, ref: "Project" },
  text: String,
  parentId: { type: mongoose.Schema.Types.ObjectId, ref: "Comment" },
  createdAt: String 
});

module.exports = mongoose.model("Comment", CommentSchema);
