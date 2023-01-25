const mongoose = require("mongoose");

const LinkSchema = new mongoose.Schema({
  link: String,
  id: String,
  short: String,
  createUser: String,
});

module.exports = mongoose.model("Link", LinkSchema);
