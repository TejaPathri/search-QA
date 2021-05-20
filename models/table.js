const mongoose = require("mongoose");
mongoose.set('useCreateIndex', true)

const qaSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
    unique: true,
  },
  answer: {
    type: String,
  }
});

module.exports = mongoose.model("QA", qaSchema);