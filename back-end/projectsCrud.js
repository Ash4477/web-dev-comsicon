const Project = require('./models/project');

// Create Project
const createProject = async (projectData) => {
  try {
    const project = new Project(projectData);
    await project.save();
    return project;
  } catch (error) {
    throw error;
  }
};

// Get All Projects
const getAllProjects = async () => {
  try {
    return await Project.find({}).populate('createdBy teamMembers.userId');
  } catch (error) {
    throw error;
  }
};

// Get Project by ID
const getProjectById = async (projectId) => {
  try {
    return await Project.findById(projectId)
      .populate('createdBy teamMembers.userId');
  } catch (error) {
    throw error;
  }
};

// Update Project
const updateProject = async (projectId, updateData) => {
  try {
    return await Project.findByIdAndUpdate(
      projectId, 
      updateData, 
      { new: true }
    ).populate('createdBy teamMembers.userId');
  } catch (error) {
    throw error;
  }
};

// Delete Project
const deleteProject = async (projectId) => {
  try {
    return await Project.findByIdAndDelete(projectId);
  } catch (error) {
    throw error;
  }
};

// Add Team Member to Project
const addTeamMember = async (projectId, memberData) => {
  try {
    return await Project.findByIdAndUpdate(
      projectId,
      { $push: { teamMembers: memberData } },
      { new: true }
    ).populate('teamMembers.userId');
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createProject,
  getAllProjects,
  getProjectById,
  updateProject,
  deleteProject,
  addTeamMember
};