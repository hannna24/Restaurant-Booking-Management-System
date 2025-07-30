const mongoose = require("mongoose");

const MenuItemSchema = new mongoose.Schema({
  title: String,
  category: String,
  price: Number,
  image: String, // This will store the image URL
});

module.exports = mongoose.model("MenuItem", MenuItemSchema);
