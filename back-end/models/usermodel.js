const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
  role: { type: String, required: true, enum: ['manager', 'member'] },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  profilePicture: { type: String },
  skills: [{ type: String }],
  joinDate: { type: Date, default: Date.now },
  lastActive: { type: Date },
  notificationPreferences: {
    email: { type: Boolean, default: true },
    push: { type: Boolean, default: true },
    inApp: { type: Boolean, default: true }
  }
});

module.exports = mongoose.model('User', userSchema);