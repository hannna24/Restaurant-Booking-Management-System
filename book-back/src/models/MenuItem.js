const mongoose = require("mongoose");

const menuItemSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },

  category: {
    type: String,
    enum: ["Breakfast", "Main", "Drinks", "Desserts"],
    required: true
  },



  price: {
    type: Number,
    required: true
  },

  image: {
    type: String,
    default: ""
  }
}, { timestamps: true });

module.exports = mongoose.model("MenuItem", menuItemSchema);
