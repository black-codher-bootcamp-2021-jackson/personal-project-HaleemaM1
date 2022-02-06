const mongoose = require("mongoose");
const { Schema } = mongoose;

const companySchema = new Schema({
  company_name: String,
  type: String,
  location: String,
  website: String,
  times: [Date],
  ID: Int16Array,
});

mongoose.model("studios", companySchema);
