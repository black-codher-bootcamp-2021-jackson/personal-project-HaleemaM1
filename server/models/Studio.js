const mongoose = require("mongoose");
const { Schema } = mongoose;

const studioSchema = new Schema({
  studio_name: String,
  type: String,
  location: String,
  website: String,
  times: [Date],
  ID: Int16Array,
});

mongoose.model("studios", studioSchema);
