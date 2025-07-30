// routes/menuroute.js
const express = require("express");
const router = express.Router();
const {
  getAllMenuItems,
  createMenuItem,
  deleteMenuItem
} = require("../controllers/menuController");

router.get("/", getAllMenuItems);
router.post("/", createMenuItem);
router.delete("/:id", deleteMenuItem);

module.exports = router;
