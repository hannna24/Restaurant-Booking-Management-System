import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const token = localStorage.getItem("token"); // 
        const res = await axios.get("http://localhost:5000/api/bookings/my-bookings", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
       
        setBookings(res.data);
      } catch (error) {
        console.error("Failed to fetch bookings:", error);
      }
    };

    fetchBookings();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">My Bookings</h2>
        <table className="w-full border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2">Date</th>
              <th className="border p-2">Time</th>
              <th className="border p-2">Guests</th>
              <th className="border p-2">Phone</th>
              <th className="border p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr key={booking._id} className="text-center">
                <td className="border p-2">{new Date(booking.date).toLocaleDateString()}</td>
                <td className="border p-2">{booking.time}</td>
                <td className="border p-2">{booking.guests}</td>
                <td className="border p-2">{booking.phone}</td>
                <td className="border p-2">{booking.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </>
  );
};

export default MyBookings;
