import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/login", { email, password })
      .then((result) => {
        console.log(result);
        if (result.data === "Success") {
          navigate("/home");
        }
      })
      .catch((e) => console.log("error", e));
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-dark vh-100">
      <div className="bg-white p-5 rounded w-50">
        <h2 className="text-center">Login</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              placeholder="abc@gmail.com"
              autoComplete="off"
              name="email"
              className="form-control rounded-0 mt-2"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              className="form-control rounded-0 mt-2"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-outline-success w-100 rounded">
            Login
          </button>
        </form>
        <div className="mt-4">
          <p>Do Not Have An Account</p>
          <Link
            to="/register"
            className="btn btn-outline-secondary border w-100 rounded-0 text-decoration-none"
          >
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
