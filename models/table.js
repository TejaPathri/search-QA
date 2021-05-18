const mongoose = require("mongoose");

const qaSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
  }
});

module.exports = mongoose.model("QA", qaSchema);