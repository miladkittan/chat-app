const express = require('express');
const chatController = require('../controllers/chatController');

const router = express.Router();

// Route to get all messages
router.get('/messages', chatController.getMessages);

// Route to send a new message
router.post('/send', chatController.sendMessage);

module.exports = router;
