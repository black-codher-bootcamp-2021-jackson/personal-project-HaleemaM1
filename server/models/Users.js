const mongoose = require("mongoose");
const { Schema } = mongoose;

const users = new Schema({
  first_name: String,
  last_name: String,
  Contact: String,
  ID: Int16Array,
  
});

mongoose.model("users", users);
