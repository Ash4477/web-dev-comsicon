const notificationSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    type: { 
      type: String, 
      enum: ['task-assigned', 'deadline-approaching', 'new-message', 'mention', 'status-change'],
      required: true 
    },
    message: { type: String, required: true },
    relatedEntity: {
      type: { type: String, enum: ['task', 'project', 'message'], required: true },
      id: { type: Schema.Types.ObjectId, required: true }
    },
    isRead: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now }
  });
  
  module.exports = mongoose.model('Notification', notificationSchema);