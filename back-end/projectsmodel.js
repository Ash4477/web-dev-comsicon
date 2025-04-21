const projectSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String },
    createdBy: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    createdAt: { type: Date, default: Date.now },
    deadline: { type: Date },
    status: { 
      type: String, 
      enum: ['planning', 'active', 'completed', 'archived'], 
      default: 'planning' 
    },
    teamMembers: [{
      userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
      role: { type: String },
      joinDate: { type: Date, default: Date.now }
    }],
    tags: [{ type: String }]
  });
  
  module.exports = mongoose.model('Project', projectSchema);