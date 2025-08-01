import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Maskgroup4 from '../assets/image110.png';

export default function Register() {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    Fname: "",
    Lname: "",
    email: "",
    phone: "",
    password: ""
  });

  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
    setFieldErrors({ ...fieldErrors, [id]: "" }); // Clear error when user types
  };

  const validateFields = () => {
    const errors = {};
    if (!formData.Fname.trim()) errors.Fname = "First name is required";
    if (!formData.Lname.trim()) errors.Lname = "Last name is required";
    if (!formData.email.trim()) errors.email = "Email is required";
    if (!formData.phone.trim()) errors.phone = "Phone number is required";
    if (!formData.password.trim()) errors.password = "Password is required";
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    const errors = validateFields();

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/api/users/register", formData);
      alert("Registered successfully!");
      console.log(res.data);
      navigate("/login");
    } catch (err) {
      const message = err.response?.data?.message || "Registration failed!";
      setError(message);
    }
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center vh-100"
      style={{
        background: `url(${Maskgroup4}) no-repeat center center`,
        backgroundSize: 'cover',
      }}
    >
      <div className="card p-5" style={{ width: "450px", backgroundColor: "rgba(255, 255, 255, 0.95)" }}>
        <h2 className="text-center mb-4">Create Account</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="Fname" className="form-label">First Name</label>
            <input type="text" className="form-control" id="Fname" onChange={handleChange} value={formData.Fname} />
            {fieldErrors.Fname && <div className="text-danger">{fieldErrors.Fname}</div>}
          </div>

          <div className="mb-3">
            <label htmlFor="Lname" className="form-label">Last Name</label>
            <input type="text" className="form-control" id="Lname" onChange={handleChange} value={formData.Lname} />
            {fieldErrors.Lname && <div className="text-danger">{fieldErrors.Lname}</div>}
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email Address</label>
            <input type="email" className="form-control" id="email" onChange={handleChange} value={formData.email} />
            {fieldErrors.email && <div className="text-danger">{fieldErrors.email}</div>}
          </div>

          <div className="mb-3">
            <label htmlFor="phone" className="form-label">Phone Number</label>
            <input type="tel" className="form-control" id="phone" onChange={handleChange} value={formData.phone} />
            {fieldErrors.phone && <div className="text-danger">{fieldErrors.phone}</div>}
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" onChange={handleChange} value={formData.password} />
            {fieldErrors.password && <div className="text-danger">{fieldErrors.password}</div>}
          </div>

          {error && <p className="text-danger mt-2">{error}</p>}

          <button type="submit" className="btn btn-danger w-100 mt-3">Register</button>
        </form>

        <div className="mt-3 d-flex justify-content-between">
          <button className="btn btn-outline-primary" onClick={() => navigate("/")}>Home</button>
          <button className="btn btn-outline-primary" onClick={() => navigate("/login")}>Login</button>
        </div>
      </div>
    </div>
  );
}
