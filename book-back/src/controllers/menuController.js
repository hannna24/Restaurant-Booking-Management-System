// controllers/menuController.js
const MenuItem = require("../models/MenuItem");

// GET /api/menu
exports.getAllMenuItems = async (req, res) => {
  const items = await MenuItem.find();
  res.json(items);
};

// POST /api/menu
exports.createMenuItem = async (req, res) => {
  const { name, price, category } = req.body;
  const newItem = new MenuItem({ name, price, category });
  await newItem.save();
  res.status(201).json(newItem);
};

// DELETE /api/menu/:id
exports.deleteMenuItem = async (req, res) => {
  await MenuItem.findByIdAndDelete(req.params.id);
  res.json({ message: "Item deleted" });
};
