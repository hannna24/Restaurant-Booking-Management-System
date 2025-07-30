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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/users/register", formData);
      alert("Registered successfully!");
      console.log(res.data); // Optional: You can save token here if returned
      navigate("/login");
    } catch (err) {
      alert("Registration failed!");
      console.error(err.response?.data || err.message);
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
            <input type="text" className="form-control" id="Fname" onChange={handleChange} value={formData.Fname} required />
          </div>
          <div className="mb-3">
            <label htmlFor="Lname" className="form-label">Last Name</label>
            <input type="text" className="form-control" id="Lname" onChange={handleChange} value={formData.Lname} required />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email Address</label>
            <input type="email" className="form-control" id="email" onChange={handleChange} value={formData.email} required />
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">Phone Number</label>
            <input type="tel" className="form-control" id="phone" onChange={handleChange} value={formData.phone} required />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" onChange={handleChange} value={formData.password} required />
          </div>
          <button type="submit" className="btn btn-danger w-100">Register</button>
        </form>
      </div>
    </div>
  );
}
