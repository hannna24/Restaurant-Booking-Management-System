const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());


// Import your routes
const menuroutes = require("./src/routes/menuroute");
app.use("/api/menu", menuroutes);

const userRoutes = require("./src/routes/users");
app.use("/api/users", userRoutes);


const bookingRoutes = require("./src/routes/bookings");
app.use("/api/bookings", bookingRoutes);

const authRoutes = require("./src/routes/auth");
app.use("/api/auth", authRoutes);

const protect = require("./src/middleware/authMiddleware");
app.get("/api/protected", protect, (req, res) => {
  res.json({ message: "Access granted", user: req.user });
});



const errorHandler = require("./src/middleware/errorMiddleware");
app.use(errorHandler); // this goes after all app.use or app.get/post


// Root route
app.get("/", (req, res) => {
  res.send("API is running...");
});


const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.error("MongoDB connection failed:", err));
