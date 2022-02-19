const mongoose = require("mongoose");
const { Schema, Types } = mongoose;

const userSchema = new Schema({
  // _id: Types.ObjectId,
  first_name: String,
  last_name: String,
  email: {type: String, unique: true},
  password: String, //encrypt the password before saving. bcrypt 
  
  
});

mongoose.model("profiles", userSchema);
