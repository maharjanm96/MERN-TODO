const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  item: {
    type: String,
    requried: true,
  },
});

module.exports = mongoose.mdoel("Todo", todoSchema);
