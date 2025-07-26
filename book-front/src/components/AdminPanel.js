import React from "react";
import { Link } from "react-router-dom";

function AdminPanel() {
  return (
    <div
      className="bg-dark text-white d-flex flex-column justify-content-between p-3"
      style={{ minHeight: "100vh", width: "220px" }}
    >
      <div>
        <h5 className="mb-4">Admin Panel</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2">
            <Link className="nav-link text-white" to="/users">
              View Users
            </Link>
          </li>
          <li className="nav-item mb-2">
            <Link className="nav-link text-white" to="/bookings">
              View Bookings
            </Link>
          </li>
          <li className="nav-item mb-2">
            <Link className="nav-link text-white" to="/managemenu">
              Manage Menu
            </Link>
          </li>
        </ul>
      </div>

      <div className="mt-auto pt-3 border-top border-light">
        <Link to="/" className="btn btn-outline-light w-100">
          Return to Home
        </Link>
      </div>
    </div>
  );
}

export default AdminPanel;
