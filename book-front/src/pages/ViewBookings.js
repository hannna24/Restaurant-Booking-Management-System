// src/pages/ViewBookings.js
import React, { useState } from "react";
import AdminPanel from "../components/AdminPanel";

function ViewBookings() {
  const [bookings, setBookings] = useState([
    { id: 1, name: "John Doe", date: "2025-07-22", time: "6:00 PM", status: "Pending" },
    { id: 2, name: "Alice Smith", date: "2025-07-23", time: "7:30 PM", status: "Pending" },
    { id: 3, name: "Mark Johnson", date: "2025-07-24", time: "8:00 PM", status: "Accepted" },
    { id: 4, name: "Emily Brown", date: "2025-07-25", time: "5:00 PM", status: "Pending" },
    { id: 5, name: "David Wilson", date: "2025-07-26", time: "6:30 PM", status: "Pending" },
    { id: 6, name: "Sarah Lee", date: "2025-07-27", time: "7:00 PM", status: "Pending" },
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const updateStatus = (id, newStatus) => {
    setBookings((prev) =>
      prev.map((booking) =>
        booking.id === id ? { ...booking, status: newStatus } : booking
      )
    );
  };

  // Pagination logic
  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentBookings = bookings.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(bookings.length / itemsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  return (
    <div className="d-flex">
      <AdminPanel />
      <div className="container mt-4">
        <h2 className="mb-4 text-center">View Table Bookings</h2>
        <div className="table-responsive">
          <table className="table table-bordered table-hover">
            <thead className="table-dark">
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Date</th>
                <th>Time</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentBookings.map((booking) => (
                <tr key={booking.id}>
                  <td>{booking.id}</td>
                  <td>{booking.name}</td>
                  <td>{booking.date}</td>
                  <td>{booking.time}</td>
                  <td>
                    <span className={`badge ${booking.status === "Accepted"
                      ? "bg-success"
                      : booking.status === "Rejected"
                        ? "bg-danger"
                        : "bg-warning text-dark"
                      }`}>
                      {booking.status}
                    </span>
                  </td>
                  <td>
                    <button
                      className="btn btn-sm btn-success me-2"
                      onClick={() => updateStatus(booking.id, "Accepted")}
                      disabled={booking.status !== "Pending"}
                    >
                      Accept
                    </button>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => updateStatus(booking.id, "Rejected")}
                      disabled={booking.status !== "Pending"}
                    >
                      Reject
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination Controls */}
        <div className="d-flex justify-content-center mt-3">
          <button className="btn btn-outline-secondary me-2" onClick={prevPage} disabled={currentPage === 1}>
            Prev
          </button>
          <span className="align-self-center">Page {currentPage} of {totalPages}</span>
          <button className="btn btn-outline-secondary ms-2" onClick={nextPage} disabled={currentPage === totalPages}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default ViewBookings;
