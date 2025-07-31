const express = require("express");
const router = express.Router();
const {
  createMenuItem,
  getAllMenuItems,
  updateMenuItem,
  deleteMenuItem,
} = require("../controllers/menuController");


router.post("/", createMenuItem);
router.get("/", getAllMenuItems);
router.put("/:id", updateMenuItem);
router.delete("/:id", deleteMenuItem);

module.exports = router;
