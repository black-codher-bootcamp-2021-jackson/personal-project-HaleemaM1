const mongoose = require("mongoose");
const { Schema, Types } = mongoose;

const studioSchema = new Schema({

  // _id: Types.ObjectId,
  studio_name: String,
  type: [String],
  location: String,
  website: String,
  times: [Date],
  
});

mongoose.model("studios", studioSchema);
