const performanceMetricsSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    projectId: { type: Schema.Types.ObjectId, ref: 'Project', required: true },
    evaluatorId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    evaluationDate: { type: Date, default: Date.now },
    metrics: {
      taskCompletionRate: { type: Number },
      averageTaskTime: { type: Number },
      communicationEngagement: { type: Number },
      timelinessScore: { type: Number, min: 1, max: 5 },
      qualityScore: { type: Number, min: 1, max: 5 },
      collaborationScore: { type: Number, min: 1, max: 5 }
    },
    feedback: { type: String },
    overallRating: { type: Number, min: 1, max: 5 }
  });
  
  module.exports = mongoose.model('PerformanceMetrics', performanceMetricsSchema);