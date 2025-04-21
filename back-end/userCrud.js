const User = require('./models/user');

// Create User
const createUser = async (userData) => {
  try {
    const user = new User(userData);
    await user.save();
    return user;
  } catch (error) {
    throw error;
  }
};

// Get All Users
const getAllUsers = async () => {
  try {
    return await User.find({});
  } catch (error) {
    throw error;
  }
};

// Get User by ID
const getUserById = async (userId) => {
  try {
    return await User.findById(userId);
  } catch (error) {
    throw error;
  }
};

// Update User
const updateUser = async (userId, updateData) => {
  try {
    return await User.findByIdAndUpdate(userId, updateData, { new: true });
  } catch (error) {
    throw error;
  }
};

// Delete User
const deleteUser = async (userId) => {
  try {
    return await User.findByIdAndDelete(userId);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser
};