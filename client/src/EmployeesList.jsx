import  { useEffect } from "react";
import Header from "./Layouts/Header";
import axios from "axios";
import { useState } from "react";

const EmployeesList = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/getUsers")
      .then((user) => {
        //  console.log(user.data);
        setUsers(user.data);
      })
      .catch((e) => console.log("E", e));
  }, []);

  return (
    <>
      <Header></Header>
      <div className="w-100 100-vh d-flex justify-content-center align-item-center">
        <div className="w-75 mt-5">
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Mobile Number</th>
                <th>Designation</th>
                <th>Gender</th>
                <th>Selected Course</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.mobileNumber}</td>
                  <td>{user.designation}</td>
                  <td>{user.gender}</td>
                  <td>{user.selectedCourse}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default EmployeesList;
