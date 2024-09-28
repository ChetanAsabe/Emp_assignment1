import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Signup from "./Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import CreateEmployee from "./CreateEmployee";
import EmployeesList from "./EmployeesList";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/logout" element={<Login />}></Route>
        <Route path="/register" element={<Signup />}></Route>
        <Route path="/create-employee" element={<CreateEmployee />}></Route>
        <Route path="/employees-list" element={<EmployeesList />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
