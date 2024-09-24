const mongoose = require("mongoose");

const usermodel = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
},{timestamps : true});

let User = mongoose.model("Libraryuser", usermodel);

module.exports = User;