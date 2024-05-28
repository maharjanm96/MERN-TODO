const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  item: {
    type: String,
    requried: true,
  },
});
const TodoModel = mongoose.model("Todo", todoSchema);
module.exports = TodoModel;
