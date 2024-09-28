import express from "express";
import mongoose from "mongoose";
import cors from "cors";
// import EmployeeModel1 from "../server/models/Employee";
import EmployeeModel1 from "../server/models/Employee.js";
import EmployeeFeedModel1 from "./models/EmployeeCreate.js";
const app = express();

app.use(express.json());
// middlewares
app.use(cors());
app.use(express.json());

mongoose.connect(
  "mongodb+srv://chetantheengineer:whQEFpXYku6iJZJP@cluster12.z8sve.mongodb.net/?retryWrites=true&w=majority&appName=Cluster12"
);

app.get("/getUsers", (req, res) => {
  console.log(19);
  EmployeeFeedModel1.find()
    .then((employees) => res.json(employees))
    .catch((e) => res.json(e));
});
app.post("/register", (req, res) => {
  EmployeeModel1.create(req.body)
    .then((employees) => res.json(employees))
    .catch((e) => console.log(e));
});
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  EmployeeModel1.findOne({ email: email })
    .then((user) => {
      if (user) {
        if (user.password === password) {
          res.json("Success");
        } else {
          res.json("The password is incorrect");
        }
      } else {
        res.json("No Record Existed");
      }
    })
    .catch((e) => console.log(e));
});

app.post("/create-employees", (req, res) => {
  console.log("req.data", req.body);
  const { name, email, mobileNumber, designation, gender, selectedCourse } =
    req.body;
  EmployeeFeedModel1.create(req.body)
    .then((employees) => res.json(employees))
    .catch((e) => console.log(e));
});

app.listen(3001, () => {
  console.log("server is running");
});
