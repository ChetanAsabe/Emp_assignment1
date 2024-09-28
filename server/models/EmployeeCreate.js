import mongoose from "mongoose";

const EmployeeFeedSchema = new mongoose.Schema({
  name: String,
  email: String,
  mobileNumber: Number,
  designation: String,
  gender: String,
  selectedCourse: String,
});

const EmployeeFeedModel1 = mongoose.model("records", EmployeeFeedSchema);

export default EmployeeFeedModel1;
