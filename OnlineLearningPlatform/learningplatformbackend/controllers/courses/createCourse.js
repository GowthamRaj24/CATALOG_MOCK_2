const Course = require('../../models/courseSchema');

const createCourse = async (req, res) => {
    try {
      const { title, description, videos } = req.body;
      const course = new Course({ title, description, instructor: req.userId, videos });
      await course.save();
      res.status(201).json(course);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create course' });
    }
  };


exports.createCourse = createCourse;