import mongoose from "mongoose";

const EmployeeSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const EmployeeModel1 = mongoose.model("employees", EmployeeSchema);

export default EmployeeModel1;
