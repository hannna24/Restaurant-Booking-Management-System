// src/pages/ViewUsers.js
import React, { useState } from "react";
import AdminPanel from "../components/AdminPanel";

function ViewUsers() {
  const users = [
    { id: 1, name: "John", email: "john@example.com", role: "Customer" },
    { id: 2, name: "Jane", email: "jane@example.com", role: "Admin" },
    { id: 3, name: "Alice", email: "alice@example.com", role: "Customer" },
    { id: 4, name: "Bob", email: "bob@example.com", role: "Customer" },
    { id: 5, name: "Emma", email: "emma@example.com", role: "Customer" },
    { id: 6, name: "Tom", email: "tom@example.com", role: "Customer" },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(users.length / usersPerPage);

  return (
    <div className="d-flex">
      <AdminPanel />
      <div className="flex-grow-1 p-4">
        <h2 className="mb-4 text-center">View Users</h2>
        <div className="table-responsive">
          <table className="table table-bordered table-striped">
            <thead className="table-dark">
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
              </tr>
            </thead>
            <tbody>
              {currentUsers.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                </tr>
              ))}
            </tbody>
          </table>

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
        </div>
      </div>
    </div>
  );
}

export default ViewUsers;
