const express = require("express");
const router = express.Router();
const { sendMessage, getMessages } = require("../controllers/contactController");

router.post("/", sendMessage); 
router.get("/", getMessages);  

module.exports = router;
