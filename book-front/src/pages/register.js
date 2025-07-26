import React from "react";
import Maskgroup4 from '../assets/image110.png';

export default function Register() {
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
        <form>
          <div className="mb-3">
            <label htmlFor="fisrtname" className="form-label">Full Name</label>
            <input type="text" className="form-control" id="fname" placeholder="Your full name" />
          </div>
          <div className="mb-3">
            <label htmlFor="lastname" className="form-label">Last Name</label>
            <input type="text" className="form-control" id="lname" placeholder="Your full name" />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email Address</label>
            <input type="email" className="form-control" id="email" placeholder="Enter your email" />
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">Phone Number</label>
            <input type="tel" className="form-control" id="phone" placeholder="Enter your phone number" />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" placeholder="Create a password" />
          </div>
          <button type="submit" className="btn btn-danger w-100">Register</button>
        </form>
      </div>
    </div>
  );
}
