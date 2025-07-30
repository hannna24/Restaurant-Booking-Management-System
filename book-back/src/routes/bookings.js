const express = require("express");
const router = express.Router();

const {
  getAllBookings,
  createBooking,
  deleteBooking,
  updateBookingStatus,
} = require("../controllers/bookingController");

const protect = require("../middleware/authMiddleware"); // Ensure the path matches your actual folder name

// Routes
router.get("/", protect, getAllBookings);
router.post("/", protect, createBooking);
router.delete("/:id", protect, deleteBooking);
router.put("/:id/status", protect, updateBookingStatus);


module.exports = router;
