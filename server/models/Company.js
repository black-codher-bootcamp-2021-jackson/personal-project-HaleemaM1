const mongoose = require("mongoose");
const { Schema,Types } = mongoose;


const companySchema = new Schema({
  // _id: Types.ObjectId,
  company_name: String,
  type: String,
  location: String,
  website: String,
  times: [Date],
});

mongoose.model("company", companySchema);
