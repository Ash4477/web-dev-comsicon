const Task = require('./models/task');

// Create Task
const createTask = async (taskData) => {
  try {
    const task = new Task(taskData);
    await task.save();
    return task.populate('createdBy assignedTo dependencies');
  } catch (error) {
    throw error;
  }
};

// Get All Tasks for a Project
const getTasksByProject = async (projectId) => {
  try {
    return await Task.find({ projectId })
      .populate('createdBy assignedTo dependencies');
  } catch (error) {
    throw error;
  }
};

// Get Task by ID
const getTaskById = async (taskId) => {
  try {
    return await Task.findById(taskId)
      .populate('createdBy assignedTo dependencies');
  } catch (error) {
    throw error;
  }
};

// Update Task
const updateTask = async (taskId, updateData) => {
  try {
    return await Task.findByIdAndUpdate(
      taskId,
      updateData,
      { new: true }
    ).populate('createdBy assignedTo dependencies');
  } catch (error) {
    throw error;
  }
};

// Delete Task
const deleteTask = async (taskId) => {
  try {
    return await Task.findByIdAndDelete(taskId);
  } catch (error) {
    throw error;
  }
};

// Add Comment to Task
const addTaskComment = async (taskId, commentData) => {
  try {
    return await Task.findByIdAndUpdate(
      taskId,
      { $push: { comments: commentData } },
      { new: true }
    ).populate('comments.userId');
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createTask,
  getTasksByProject,
  getTaskById,
  updateTask,
  deleteTask,
  addTaskComment
};