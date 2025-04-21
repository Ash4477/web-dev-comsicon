const taskSchema = new Schema({
    projectId: { type: Schema.Types.ObjectId, ref: 'Project', required: true },
    title: { type: String, required: true },
    description: { type: String },
    createdBy: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    assignedTo: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    status: { 
      type: String, 
      enum: ['to-do', 'in-progress', 'completed', 'blocked'], 
      default: 'to-do' 
    },
    priority: { 
      type: String, 
      enum: ['low', 'medium', 'high', 'critical'], 
      default: 'medium' 
    },
    createdAt: { type: Date, default: Date.now },
    deadline: { type: Date },
    completedAt: { type: Date },
    estimatedHours: { type: Number },
    actualHours: { type: Number },
    dependencies: [{ type: Schema.Types.ObjectId, ref: 'Task' }],
    comments: [{
      userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
      text: { type: String, required: true },
      createdAt: { type: Date, default: Date.now }
    }]
  });
  
  module.exports = mongoose.model('Task', taskSchema);