const mongoose = require('mongoose');

const userAccessLogSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  loginTime: {
    type: Date,
    default: Date.now,
  },
});

const UserAccessLog = mongoose.model('UserAccessLog', userAccessLogSchema);

module.exports = UserAccessLog;