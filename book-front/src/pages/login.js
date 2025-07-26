import React, { useState } from "react";
import { Link } from "react-router-dom";
import Maskgroup4 from '../assets/image110.png';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add login logic here
    console.log("Login submitted", { email, password });
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{
        background: `url(${Maskgroup4}) no-repeat center center`,
        backgroundSize: "cover",
      }}
    >
      <div
        className="card shadow p-4 bg-white bg-opacity-75"
        style={{ width: "100%", maxWidth: "400px", borderRadius: "16px" }}
      >
        <h3 className="text-center mb-4">Welcome Back</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              className="form-control rounded"
              placeholder="Enter your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control rounded"
              placeholder="Enter your password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="btn btn-primary w-100 mb-3 rounded-pill" type="submit">
            Login
          </button>
          <p className="text-center mb-0">
            Don’t have an account?{" "}
            <Link to="/register" className="text-decoration-none text-primary fw-bold">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
