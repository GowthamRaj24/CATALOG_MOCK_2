const Course = require('../../models/courseSchema');

const getCourseById = async (req, res) => {
    try {
    console.log(req.params.id);
    const course = await Course.findById(req.params.id);
    console.log("Courses fetched" +course);
    if (!course) {
        return res.status(404).json({ error: 'Course not found' });
    }
      res.status(200).json({course});
    } catch (error) {
        console.log(error);
      res.status(500).json({ error: 'Failed to fetch course' });
    }
  };

exports.getCourseById = getCourseById;