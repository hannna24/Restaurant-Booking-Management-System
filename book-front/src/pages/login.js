import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Maskgroup4 from "../assets/image110.png";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset error messages
    setErrorMsg("");
    setEmailError("");
    setPasswordError("");

    let valid = true;

    // Validate email
    if (!email.trim()) {
      setEmailError("Email is required.");
      valid = false;
    } else if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address.");
      valid = false;
    }

    // Validate password
    if (!password.trim()) {
      setPasswordError("Password is required.");
      valid = false;
    }

    if (!valid) return;

    try {
      const response = await axios.post("http://localhost:5000/api/users/login", {
        email,
        password,
      });

      const { token, user } = response.data;

      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      navigate("/");
    } catch (error) {
      console.error(error);
      setErrorMsg("Invalid email or password.");
    }
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
          {/* Email */}
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              className={`form-control rounded ${emailError ? "is-invalid" : ""}`}
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailError && <div className="text-danger mt-1">{emailError}</div>}
          </div>

          {/* Password + toggle */}
          <div className="mb-3">
            <label className="form-label">Password</label>
            <div className="input-group">
              <input
                type={showPassword ? "text" : "password"}
                className={`form-control rounded-start ${passwordError ? "is-invalid" : ""}`}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                className="btn btn-outline-secondary rounded-end"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            {passwordError && <div className="text-danger mt-1">{passwordError}</div>}
          </div>

          {/* Global Error */}
          {errorMsg && <div className="text-danger text-center mb-2">{errorMsg}</div>}

          {/* Submit */}
          <button className="btn btn-primary w-100 mb-3 rounded-pill" type="submit">
            Login
          </button>

          {/* Register link */}
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
