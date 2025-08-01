const express = require("express");
const router = express.Router();

const {
  getAllUsers,
  registerUser,
  loginUser,
  deleteUser,
  updateUserProfile,
} = require("../controllers/userController");

const protect = require("../middleware/authMiddleware"); 

// Route to register a new user
router.post("/register", registerUser);

// Route to login user
router.post("/login", loginUser);

// Route to get all users (admin)
router.get("/", getAllUsers);

// Route to delete a user by ID
router.delete("/:id", deleteUser);

// Route to update user's own profile
router.put("/update-profile", protect, updateUserProfile);

module.exports = router;
