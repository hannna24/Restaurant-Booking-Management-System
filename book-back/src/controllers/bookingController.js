// Dummy data for now
let bookings = [
  { id: 1, name: "Hana", table: 5, time: "7:00 PM" },
];

// Get all bookings
const getAllBookings = (req, res) => {
  res.json(bookings);
};

const createBooking = async (req, res) => {
  try {
    const { date, time, guests, phone, user } = req.body;

    const newBooking = await Booking.create({
      date,
      time,
      guests,
      phone,
      user,
    });

    res.status(201).json(newBooking);
  } catch (error) {
    console.error("Error creating booking:", error);
    res.status(500).json({ message: "Failed to create booking" });
  }
};

// Delete a booking by ID
const deleteBooking = (req, res) => {
  const bookingId = parseInt(req.params.id);
  bookings = bookings.filter(b => b.id !== bookingId);
  res.json({ message: "Booking deleted successfully" });
};

module.exports = {
  getAllBookings,
  createBooking,
  deleteBooking,
};
