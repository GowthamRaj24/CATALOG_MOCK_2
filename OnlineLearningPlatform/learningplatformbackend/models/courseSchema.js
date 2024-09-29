const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  instructor: { type: String, required: true },
  videos: [{ 
    title: String, 
    url: String, 
    duration: Number 
  }],
  enrolledStudents: { type: [{ type: String }], default: [] },
});

module.exports = mongoose.model('Course', courseSchema);