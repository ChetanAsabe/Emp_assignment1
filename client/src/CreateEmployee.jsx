import Header from "./Layouts/Header";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateEmployee = () => {
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [mobileNumber, setMobileNumber] = useState();
  const [designation, setDesignation] = useState();
  const [gender, setGender] = useState();
  const [selectedCourse, setSelectedCourse] = useState("");

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    console.log("hi");
    e.preventDefault();
    console.log(e);
    axios
      .post("http://localhost:3001/create-employees", {
        name,
        email,
        mobileNumber,
        designation,
        gender,
        selectedCourse,
      })
      .then((result) => {
        console.log(result);
        if (result.data === "Success") {
          navigate("/employees-list");
        }
      })
      .catch((e) => console.log("error", e));
    setTimeout(() => {
      setShowSuccessAlert(true);
    }, 2000);
    setShowSuccessAlert(false);
  };

  return (
    <>
      <Header></Header>

      <div className="d-flex justify-content-center align-items-center bg-dark vh-100">
        <div className="bg-white p-5 rounded w-50">
          <h2 className="text-center">Create Employee</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email">
                <strong>Name</strong>
              </label>
              <input
                type="text"
                placeholder="Enter Name"
                autoComplete="off"
                name="email"
                className="form-control rounded mt-1"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email">
                <strong>Email</strong>
              </label>
              <input
                type="email"
                placeholder="Enter Email"
                autoComplete="off"
                name="email"
                className="form-control rounded mt-1"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email">
                <strong>Mobile Number</strong>
              </label>
              <input
                type="text"
                placeholder="Enter Mobile Number"
                autoComplete="off"
                name="text"
                className="form-control rounded mt-1"
                onChange={(e) => setMobileNumber(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="designation">
                <strong>Designation</strong>
              </label>
              <select
                className="form-select rounded mt-1"
                value={designation}
                onChange={(e) => setDesignation(e.target.value)}
              >
                <option value="">Select Designation</option>
                <option value="HR">HR</option>
                <option value="Manager">Manager</option>
                <option value="Sales">Sales</option>
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="gender">
                <strong>Gender</strong>
              </label>
              <select
                className="form-select rounded mt-1"
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="courses">
                <strong>Course</strong>
              </label>
              <div>
                <div className="form-check">
                  <input
                    type="radio"
                    id="mca"
                    value="MCA"
                    className="form-check-input"
                    checked={selectedCourse === "MCA"}
                    onChange={(e) => setSelectedCourse(e.target.value)}
                  />
                  <label htmlFor="mca" className="form-check-label">
                    MCA
                  </label>
                </div>
                <div className="form-check">
                  <input
                    type="radio"
                    id="bca"
                    value="BCA"
                    className="form-check-input"
                    checked={selectedCourse === "BCA"}
                    onChange={(e) => setSelectedCourse(e.target.value)}
                  />
                  <label htmlFor="bca" className="form-check-label">
                    BCA
                  </label>
                </div>
                <div className="form-check">
                  <input
                    type="radio"
                    id="bsc"
                    value="BSC"
                    className="form-check-input"
                    checked={selectedCourse === "BSC"}
                    onChange={(e) => setSelectedCourse(e.target.value)}
                  />
                  <label htmlFor="bsc" className="form-check-label">
                    BSC
                  </label>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="btn btn-outline-success w-100 rounded"
            >
              Submit
            </button>
          </form>
        </div>
        <div style={{ position: "absolute", top: "3rem", right: "1rem" }}>
          {showSuccessAlert && (
            <div className="alert alert-success mt-3" role="alert">
              Success! Your form has been submitted.
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CreateEmployee;
