const Course = require('../../models/courseSchema');


const getAllCourses = async (req, res) => {
    try {
      const courses = await Course.find().populate('instructor', 'username');
      res.json(courses);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch courses' });
    }
  };

exports.getAllCourses = getAllCourses;