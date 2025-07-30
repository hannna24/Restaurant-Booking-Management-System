const Booking = require('../models/Booking');


const updateBookingStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  if (!["pending", "accepted", "rejected"].includes(status)) {
    return res.status(400).json({ message: "Invalid status value" });
  }

  try {
    const booking = await Booking.findById(id);
    if (!booking) return res.status(404).json({ message: "Booking not found" });

    booking.status = status;
    await booking.save();

    res.json({ message: "Status updated", booking });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to update status" });
  }
};


// Get all bookings from MongoDB
const getAllBookings = async (req, res) => {
  try {
    if (req.user.role !== "admin") {
      return res.status(403).json({ message: "Access denied" });
    }

    const bookings = await Booking.find().populate("user", "Fname Lname email");

    res.status(200).json(bookings);
  } catch (err) {
    console.error("Error fetching bookings:", err);
    res.status(500).json({ message: "Server error" });
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
  updateBookingStatus,
};
