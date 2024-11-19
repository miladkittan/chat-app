let messages = [];

const getMessages = (req, res) => {
  try {
    res.status(200).json(messages);
  } catch (error) {
    console.error('Error fetching messages:', error);
    res.status(500).json({ error: 'Failed to fetch messages' });
  }
};

const sendMessage = (req, res) => {
  try {
    const { message, sender } = req.body;

    if (!message || !sender) {
      return res.status(400).json({ error: 'Message and sender are required' });
    }

    const newMessage = {
      text: message,
      sender,
      timestamp: new Date(),
    };

    messages.push(newMessage);

    res.status(201).json(newMessage);
  } catch (error) {
    console.error('Error sending message:', error);
    res.status(500).json({ error: 'Failed to send message' });
  }
};

module.exports = {
  getMessages,
  sendMessage,
};
