const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");



// Admin usernames (you can make this dynamic later)
const adminUsernames = ["admin"]; // add any usernames you want to be admins

const registerUser = (req, res) => {
  const { username, password } = req.body;

  // Check if user exists
  const userExists = users.find(u => u.username === username);
  if (userExists) {
    return res.status(400).json({ message: "User already exists" });
  }

  // Determine if this user is an admin
  const isAdmin = adminUsernames.includes(username);

  // Hash password
  const hashedPassword = bcrypt.hashSync(password, 10);
  const newUser = {
    id: Date.now(),
    username,
    password: hashedPassword,
    isAdmin, // ✅ add isAdmin flag
  };
  users.push(newUser);

  res.status(201).json({ message: "User registered successfully" });
};

const loginUser = (req, res) => {
  const { username, password } = req.body;

  const user = users.find(u => u.username === username);
  if (!user) return res.status(400).json({ message: "Invalid credentials" });

  const isMatch = bcrypt.compareSync(password, user.password);
  if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

  // ✅ Include isAdmin in JWT token
  const token = jwt.sign(
    { id: user.id, isAdmin: user.isAdmin },
    "your_jwt_secret",
    { expiresIn: "1h" }
  );

  // ✅ Also send isAdmin in the response
  res.json({
    token,
    user: {
      id: user.id,
      username: user.username,
      isAdmin: user.isAdmin,
    },
  });
};

module.exports = {
  registerUser,
  loginUser,
};
