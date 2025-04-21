const PerformanceMetrics = require('./models/performanceMetrics');

// Create Performance Review
const createPerformanceReview = async (reviewData) => {
  try {
    const review = new PerformanceMetrics(reviewData);
    await review.save();
    return review.populate('userId projectId evaluatorId');
  } catch (error) {
    throw error;
  }
};

// Get Reviews for a User
const getUserPerformanceReviews = async (userId) => {
  try {
    return await PerformanceMetrics.find({ userId })
      .populate('projectId evaluatorId');
  } catch (error) {
    throw error;
  }
};

// Get Reviews for a Project
const getProjectPerformanceReviews = async (projectId) => {
  try {
    return await PerformanceMetrics.find({ projectId })
      .populate('userId evaluatorId');
  } catch (error) {
    throw error;
  }
};

// Update Performance Review
const updatePerformanceReview = async (reviewId, updateData) => {
  try {
    return await PerformanceMetrics.findByIdAndUpdate(
      reviewId,
      updateData,
      { new: true }
    ).populate('userId projectId evaluatorId');
  } catch (error) {
    throw error;
  }
};

// Delete Performance Review
const deletePerformanceReview = async (reviewId) => {
  try {
    return await PerformanceMetrics.findByIdAndDelete(reviewId);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createPerformanceReview,
  getUserPerformanceReviews,
  getProjectPerformanceReviews,
  updatePerformanceReview,
  deletePerformanceReview
};