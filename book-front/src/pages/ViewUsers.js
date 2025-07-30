// src/pages/ViewUsers.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import AdminPanel from "../components/AdminPanel";

function ViewUsers() {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const usersPerPage = 5;

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get("http://localhost:5000/api/users", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUsers(res.data);
      } catch (err) {
        console.error("Failed to fetch users:", err);
        setError("Failed to load users");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(users.length / usersPerPage);

  return (
    <div className="d-flex">
      <AdminPanel />
      <div className="flex-grow-1 p-4">
        <h2 className="mb-4 text-center">View Users</h2>

        {loading ? (
          <div className="text-center">Loading users...</div>
        ) : error ? (
          <div className="text-danger text-center">{error}</div>
        ) : (
          <>
            <div className="table-responsive">
              <table className="table table-bordered table-striped">
                <thead className="table-dark">
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Role</th>
                  </tr>
                </thead>
                <tbody>
                  {currentUsers.map((user, index) => (
                    <tr key={user._id}>
                      <td>{indexOfFirstUser + index + 1}</td>
                      <td>{user.Fname} {user.Lname}</td>
                      <td>{user.email}</td>
                      <td>{user.phone}</td>
                      <td className={user.role === "admin" ? "text-danger fw-bold" : "text-primary"}>
                        {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="d-flex justify-content-center">
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  className={`btn mx-1 ${
                    currentPage === index + 1
                      ? "btn-primary"
                      : "btn-outline-primary"
                  }`}
                  onClick={() => setCurrentPage(index + 1)}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default ViewUsers;
