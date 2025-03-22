const mongoose = require('mongoose');

const pledgeSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  reason: { type: String, required: true },
  pledged: { type: Boolean, required: true },
  approved: { type: Boolean, default: false },
  inviteCode: { type: String, default: null },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Pledge', pledgeSchema);
