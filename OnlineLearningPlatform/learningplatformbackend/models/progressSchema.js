const mongoose = require('mongoose');

const progressSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
  completedVideos: [{ type: mongoose.Schema.Types.ObjectId }],
  lastWatched: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Progress', progressSchema);
