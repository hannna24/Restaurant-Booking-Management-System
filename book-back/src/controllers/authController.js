const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Dummy user DB
let users = [];

const registerUser = (req, res) => {
  const { username, password } = req.body;

  // Check if user exists
  const userExists = users.find(u => u.username === username);
  if (userExists) {
    return res.status(400).json({ message: "User already exists" });
  }

  // Hash password
  const hashedPassword = bcrypt.hashSync(password, 10);
  const newUser = { id: Date.now(), username, password: hashedPassword };
  users.push(newUser);

  res.status(201).json({ message: "User registered successfully" });
};

const loginUser = (req, res) => {
  const { username, password } = req.body;

  const user = users.find(u => u.username === username);
  if (!user) return res.status(400).json({ message: "Invalid credentials" });

  const isMatch = bcrypt.compareSync(password, user.password);
  if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

  const token = jwt.sign({ id: user.id }, "your_jwt_secret", { expiresIn: "1h" });
  res.json({ token });
};

module.exports = {
  registerUser,
  loginUser,
};
