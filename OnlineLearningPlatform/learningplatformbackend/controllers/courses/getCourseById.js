const Course = require('../../models/courseSchema');

const getCourseById = async (req, res) => {
    try {
      const course = await Course.findById(req.params.courseId).populate('instructor', 'username');
      if (!course) {
        return res.status(404).json({ error: 'Course not found' });
      }
      res.json(course);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch course' });
    }
  };

exports.getCourseById = getCourseById;