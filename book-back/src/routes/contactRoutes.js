const express = require("express");
const router = express.Router();
const { sendMessage, getMessages } = require("../controllers/contactController");

router.post("/", sendMessage); // ✅ sendMessage is a function
router.get("/", getMessages);  // ✅ getMessages is a function

module.exports = router;
