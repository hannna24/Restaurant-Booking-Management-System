// src/pages/Profile.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Profile() {
  const storedUser = JSON.parse(localStorage.getItem("user"));

  const [Fname, setFname] = useState(storedUser?.Fname || "");
  const [Lname, setLname] = useState(storedUser?.Lname || "");
  const [phone, setPhone] = useState(storedUser?.phone || "");
  const [message, setMessage] = useState("");

  const [errors, setErrors] = useState({
    Fname: "",
    Lname: "",
    phone: "",
  });

  // Show login prompt if not logged in
  if (!storedUser) {
    return (
      <div className="container mt-5 text-center">
        <h3>You are not logged in.</h3>
        <Link to="/login" className="btn btn-warning m-2">Login</Link>
        <Link to="/" className="btn btn-primary m-2">Return Home</Link>
      </div>
    );
  }

  const validateInputs = () => {
    let valid = true;
    const newErrors = { Fname: "", Lname: "", phone: "" };

    if (!Fname.trim()) {
      newErrors.Fname = "First name is required.";
      valid = false;
    }

    if (!Lname.trim()) {
      newErrors.Lname = "Last name is required.";
      valid = false;
    }

    if (!phone.trim()) {
      newErrors.phone = "Phone number is required.";
      valid = false;
    } else if (!/^\d{10,15}$/.test(phone)) {
      newErrors.phone = "Enter a valid phone number.";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleUpdate = async () => {
    setMessage("");
    if (!validateInputs()) return;

    try {
      const token = localStorage.getItem("token");

      const res = await axios.put(
        "http://localhost:5000/api/users/update-profile",
        { Fname, Lname, phone },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      localStorage.setItem("user", JSON.stringify(res.data));
      setMessage("Profile updated successfully!");
    } catch (error) {
      console.error("Update failed", error);
      setMessage("Update failed: " + (error.response?.data?.message || "Unauthorized"));
    }
  };

  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <h2 className="mb-4">My Profile</h2>

        <div className="card p-4 mb-3">
          {/* First Name */}
          <div className="mb-3">
            <label><strong>First Name:</strong></label>
            <input
              type="text"
              className={`form-control ${errors.Fname && "is-invalid"}`}
              value={Fname}
              onChange={(e) => setFname(e.target.value)}
            />
            {errors.Fname && <div className="text-danger">{errors.Fname}</div>}
          </div>

          {/* Last Name */}
          <div className="mb-3">
            <label><strong>Last Name:</strong></label>
            <input
              type="text"
              className={`form-control ${errors.Lname && "is-invalid"}`}
              value={Lname}
              onChange={(e) => setLname(e.target.value)}
            />
            {errors.Lname && <div className="text-danger">{errors.Lname}</div>}
          </div>

          {/* Phone */}
          <div className="mb-3">
            <label><strong>Phone:</strong></label>
            <input
              type="text"
              className={`form-control ${errors.phone && "is-invalid"}`}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            {errors.phone && <div className="text-danger">{errors.phone}</div>}
          </div>

          {/* Email and Role */}
          <h5><strong>Email:</strong> {storedUser.email}</h5>
          <h5><strong>Role:</strong> {storedUser.role}</h5>

          {/* Success or Error Message */}
          {message && <div className="alert alert-info mt-3">{message}</div>}

          <button className="btn btn-success mt-3" onClick={handleUpdate}>
            Update Profile
          </button>
        </div>

        <Link to="/" className="btn btn-primary mb-3">Return Home</Link>
      </div>
      <Footer />
    </>
  );
}

export default Profile;
