const Notification = require('./models/notification');

// Create Notification
const createNotification = async (notificationData) => {
  try {
    const notification = new Notification(notificationData);
    await notification.save();
    return notification.populate('userId');
  } catch (error) {
    throw error;
  }
};

// Get User Notifications
const getUserNotifications = async (userId) => {
  try {
    return await Notification.find({ userId })
      .populate('userId')
      .sort({ createdAt: -1 });
  } catch (error) {
    throw error;
  }
};

// Mark Notification as Read
const markNotificationAsRead = async (notificationId) => {
  try {
    return await Notification.findByIdAndUpdate(
      notificationId,
      { isRead: true },
      { new: true }
    ).populate('userId');
  } catch (error) {
    throw error;
  }
};

// Delete Notification
const deleteNotification = async (notificationId) => {
  try {
    return await Notification.findByIdAndDelete(notificationId);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createNotification,
  getUserNotifications,
  markNotificationAsRead,
  deleteNotification
};