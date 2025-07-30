const Contact = require("../models/Message");

const sendMessage = async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    const newMessage = new Contact({ name, email, subject, message });
    await newMessage.save();

    res.status(200).json({ message: "Your message has been received!" });
  } catch (error) {
    console.error("Error saving message:", error);
    res.status(500).json({ message: "Server error." });
  }
};

const getMessages = async (req, res) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json(messages);
  } catch (error) {
    console.error("Error fetching messages:", error);
    res.status(500).json({ message: "Server error." });
  }
};

module.exports = { sendMessage, getMessages };
