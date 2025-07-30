import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { GiBowlOfRice } from "react-icons/gi";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/login");
  };
const user = JSON.parse(localStorage.getItem("user"));
  return (
    <div className="custom-navbar">
      {/* Top Bar */}
      <div
        className="navbar-top d-flex justify-content-between align-items-center bg-dark text-white"
        style={{ height: "35px", padding: "0 15rem" }}
      >
        <div className="d-flex gap-5 small">
          <span className="bi bi-telephone"> (+20) 123 456 789</span>
          <span className="bi bi-envelope-at"> info@bistrobliss.com</span>
        </div>
        <div className="d-flex gap-3 small">
          <a
            href="https://instagram.com"
            className="text-white text-decoration-none bi bi-instagram"
            title="Instagram"
          ></a>
          <a
            href="https://twitter.com"
            className="text-white text-decoration-none bi bi-twitter"
            title="Twitter"
          ></a>
          <a
            href="https://facebook.com"
            className="text-white text-decoration-none bi bi-facebook"
            title="Facebook"
          ></a>
        </div>
      </div>

      {/* Bottom Main Navbar */}
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container">
          <GiBowlOfRice
            size={70}
            color="#dc3545"
            style={{ paddingRight: "6px", paddingBottom: "10px" }}
          />
          <a
            className="navbar-brand fw-bold text-dark"
            href="#"
            style={{ fontFamily: "Pacifico, cursive", fontSize: "1.7rem" }}
          >
            Bistro Bliss
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav me-3">
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/menu">
                  Menu
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/blog">
                  Pages
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
            <Link className="btn btn-outline-dark rounded-pill me-2" to="/book">
              Book A Table
            </Link>

            {isLoggedIn ? (
              <button
                className="btn btn-danger rounded-pill"
                onClick={handleLogout}
              >
                Logout
              </button>
            ) : (
              <>
                <Link
                  className="btn btn-outline-primary rounded-pill me-2"
                  to="/login"
                >
                  Login
                </Link>
                <Link
                  className="btn btn-outline-success rounded-pill"
                  to="/register"
                >
                  Register
                </Link>
                
              </>

              
            )}
{user?.role === "admin" && (
  <Link
    to="/users"
    className="btn btn-dark rounded-pill ms-2"
  >
    Admin Panel
  </Link>
)}


          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
