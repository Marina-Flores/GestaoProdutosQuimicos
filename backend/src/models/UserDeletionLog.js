const mongoose = require('mongoose');

const userDeletionLogSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  deletionTime: {
    type: Date,
    default: Date.now,
  },
});

const UserDeletionLog = mongoose.model('UserDeletionLog', userDeletionLogSchema);

module.exports = UserDeletionLog;
