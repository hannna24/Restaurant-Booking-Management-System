const MenuItem = require("../models/MenuItem");

// Create a new menu item with image URL
const createMenuItem = async (req, res) => {
  try {
    const { title, category, price, imageUrl } = req.body;

    const newItem = new MenuItem({
      title,
      category,
      price,
      image: imageUrl || "",
    });

    await newItem.save();
    res.status(201).json(newItem);
  } catch (err) {
    console.error("Create Error:", err);
    res.status(400).json({ message: "Failed to create menu item" });
  }
};

// Get all menu items
const getAllMenuItems = async (req, res) => {
  try {
    const items = await MenuItem.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch menu items" });
  }
};

// Update menu item
const updateMenuItem = async (req, res) => {
  try {
    const { title, category, price, imageUrl } = req.body;
    const item = await MenuItem.findById(req.params.id);

    if (!item) return res.status(404).json({ message: "Item not found" });

    item.title = title || item.title;
    item.category = category || item.category;
    item.price = price || item.price;
    item.image = imageUrl || item.image;

    await item.save();
    res.json(item);
  } catch (err) {
    console.error("Update Error:", err);
    res.status(400).json({ message: "Failed to update item" });
  }
};

// Delete menu item
const deleteMenuItem = async (req, res) => {
  try {
    const item = await MenuItem.findByIdAndDelete(req.params.id);
    if (!item) return res.status(404).json({ message: "Item not found" });

    res.json({ message: "Menu item deleted" });
  } catch (err) {
    res.status(500).json({ message: "Failed to delete menu item" });
  }
};

module.exports = {
  createMenuItem,
  getAllMenuItems,
  updateMenuItem,
  deleteMenuItem,
};
