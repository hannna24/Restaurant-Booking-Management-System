import React, { useState, useEffect } from "react";
import axios from "axios";
import AdminPanel from "../components/AdminPanel";

function ViewBookings() {
  const [bookings, setBookings] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const itemsPerPage = 5;

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get("http://localhost:5000/api/bookings", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setBookings(res.data);
      } catch (err) {
        setError("Failed to fetch bookings");
      } finally {
        setLoading(false);
      }
    };
    fetchBookings();
  }, []);

  const updateStatus = async (id, newStatus) => {
    const token = localStorage.getItem("token");

    try {
      const res = await axios.put(
        `http://localhost:5000/api/bookings/${id}/status`,
        { status: newStatus.toLowerCase() }, // ensure lowercase for backend
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      // Update local state after successful DB update
      setBookings((prev) =>
        prev.map((booking) =>
          booking._id === id ? { ...booking, status: res.data.booking.status } : booking
        )
      );
    } catch (err) {
      console.error("Failed to update booking status:", err);
      alert("Error updating booking status.");
    }
  };

  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentBookings = bookings.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(bookings.length / itemsPerPage);

  const nextPage = () => currentPage < totalPages && setCurrentPage((prev) => prev + 1);
  const prevPage = () => currentPage > 1 && setCurrentPage((prev) => prev - 1);

  if (loading) return <div className="text-center mt-5">Loading bookings...</div>;
  if (error) return <div className="text-center mt-5 text-danger">{error}</div>;

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
                <th>Email</th>
                <th>Date</th>
                <th>Time</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {currentBookings.map((booking, index) => (
                <tr key={booking._id}>
                  <td>{indexOfFirst + index + 1}</td>
                  <td>
                    {booking.user?.Fname || ""} {booking.user?.Lname || ""}
                  </td>
                  <td>{booking.user?.email}</td>
                  <td>{booking.date}</td>
                  <td>{booking.time}</td>
                  <td>
                    <select
                      className={`form-select ${
                        booking.status === "Accepted"
                          ? "bg-success text-white"
                          : booking.status === "Rejected"
                          ? "bg-danger text-white"
                          : "bg-warning text-dark"
                      }`}
                      value={booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                      onChange={(e) => updateStatus(booking._id, e.target.value)}
                    >
                      <option value="Pending">Pending</option>
                      <option value="Accepted">Accepted</option>
                      <option value="Rejected">Rejected</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="d-flex justify-content-center mt-3">
          <button
            className="btn btn-outline-secondary me-2"
            onClick={prevPage}
            disabled={currentPage === 1}
          >
            Prev
          </button>
          <span className="align-self-center">
            Page {currentPage} of {totalPages}
          </span>
          <button
            className="btn btn-outline-secondary ms-2"
            onClick={nextPage}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default ViewBookings;
