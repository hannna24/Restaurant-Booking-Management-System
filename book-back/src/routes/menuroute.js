const express = require("express");
const router = express.Router();
const {
  createMenuItem,
  getAllMenuItems,
  updateMenuItem,
  deleteMenuItem,
} = require("../controllers/menuController");

// No multer needed (we are using image URLs)
router.post("/", createMenuItem);
router.get("/", getAllMenuItems);
router.put("/:id", updateMenuItem);
router.delete("/:id", deleteMenuItem);

module.exports = router;
