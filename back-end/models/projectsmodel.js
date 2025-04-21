const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  // createdBy: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "User",
  //   required: true,
  // },
  createdAt: { type: Date, default: Date.now },
  status: {
    type: String,
    enum: ["pending", "complete", "incomplete"],
    default: "planning",
  },
  messages: [
    {
      text: { type: String },
    },
  ],
  tasks: [{ id: String, title: String, isComplete: Boolean }],
});

module.exports = mongoose.model("Project", projectSchema);
