const mongoose = require("mongoose");

const MenuItemSchema = new mongoose.Schema({
  title: String,
  category: String,
  price: Number,
  image: String, 
});

module.exports = mongoose.model("MenuItem", MenuItemSchema);
