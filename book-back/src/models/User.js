const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  Fname: {
    type: String,
    required: true,
    trim: true
  },

  Lname: {
    type: String,
    required: true,
    trim: true
  },

  phone: {
    type: String,
    required: true
  },
  
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },

  password: {
    type: String,
    required: true
  },

  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user"
  }
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);
