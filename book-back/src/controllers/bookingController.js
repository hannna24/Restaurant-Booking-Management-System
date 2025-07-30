const Booking = require('../models/Booking');

// Get all bookings from MongoDB
const getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().populate("user", "username email"); // optional: return only selected user fields
    res.json(bookings);
  } catch (error) {
    console.error("Error fetching bookings:", error);
    res.status(500).json({ message: "Failed to fetch bookings" });
  }
};

// Create a new booking
const createBooking = async (req, res) => {
  try {
    const { date, time, guests, phone, user } = req.body;

    // Validate required fields
    if (!date || !time || !guests || !phone || !user) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newBooking = new Booking({
      user,
      date,
      time,
      guests,
      phone
    });

    await newBooking.save();

    res.status(201).json({ message: "Booking created successfully", booking: newBooking });
  } catch (error) {
    console.error("Error creating booking:", error);
    res.status(500).json({ message: "Failed to create booking" });
  }
};

// Delete a booking by ID
const deleteBooking = async (req, res) => {
  try {
    const bookingId = req.params.id;
    const deleted = await Booking.findByIdAndDelete(bookingId);

    if (!deleted) {
      return res.status(404).json({ message: "Booking not found" });
    }

    res.json({ message: "Booking deleted successfully" });
  } catch (error) {
    console.error("Error deleting booking:", error);
    res.status(500).json({ message: "Failed to delete booking" });
  }
};

module.exports = {
  getAllBookings,
  createBooking,
  deleteBooking,
};
