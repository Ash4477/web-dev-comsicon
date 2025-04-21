const messageSchema = new Schema({
    projectId: { type: Schema.Types.ObjectId, ref: 'Project', required: true },
    channel: { type: String, default: 'general' },
    senderId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    message: { type: String, required: true },
    attachments: [{
      url: { type: String, required: true },
      type: { type: String },
      name: { type: String }
    }],
    createdAt: { type: Date, default: Date.now },
    readBy: [{ type: Schema.Types.ObjectId, ref: 'User' }]
  });
  
  module.exports = mongoose.model('Message', messageSchema);