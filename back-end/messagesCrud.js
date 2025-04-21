const Message = require('./models/message');

// Create Message
const createMessage = async (messageData) => {
  try {
    const message = new Message(messageData);
    await message.save();
    return message.populate('senderId readBy');
  } catch (error) {
    throw error;
  }
};

// Get Messages for a Project Channel
const getMessagesByChannel = async (projectId, channel) => {
  try {
    return await Message.find({ projectId, channel })
      .populate('senderId readBy')
      .sort({ createdAt: 1 });
  } catch (error) {
    throw error;
  }
};

// Mark Message as Read
const markMessageAsRead = async (messageId, userId) => {
  try {
    return await Message.findByIdAndUpdate(
      messageId,
      { $addToSet: { readBy: userId } },
      { new: true }
    ).populate('senderId readBy');
  } catch (error) {
    throw error;
  }
};

// Delete Message
const deleteMessage = async (messageId) => {
  try {
    return await Message.findByIdAndDelete(messageId);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createMessage,
  getMessagesByChannel,
  markMessageAsRead,
  deleteMessage
};