const express = require("express");
const router = express.Router();
const protect = require("../middleware/authMiddleware");

// Import controller functions
const {
  getAllBookings,
  createBooking,
  deleteBooking,
  updateBookingStatus,
  getUserBookings
} = require("../controllers/bookingController");

// Routes
router.get("/", protect, getAllBookings);                   // Admin: Get all bookings
router.post("/", protect, createBooking);                  // User: Create a new booking
router.delete("/:id", protect, deleteBooking);             // Admin: Delete a booking
router.put("/:id/status", protect, updateBookingStatus);   // Admin: Update booking status
router.get("/my-bookings", protect, getUserBookings);      // User: Get own bookings

module.exports = router;
