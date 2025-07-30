const express = require("express");
const router = express.Router();

const {
  getAllUsers,
  registerUser,
  loginUser,
  deleteUser,
} = require("../controllers/userController");

// Route to register a new user
router.post("/register", registerUser);

// Route to login user
router.post("/login", loginUser);

// Route to get all users (admin)
router.get("/", getAllUsers);

// Route to delete a user by ID
router.delete("/:id", deleteUser);

module.exports = router;
