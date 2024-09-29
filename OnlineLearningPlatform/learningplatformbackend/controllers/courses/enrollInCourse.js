const Course = require('../../models/courseSchema');

const enrollInCourse = async (req, res) => {
    try {
      const course = await Course.findById(req.params.id);
      if (!course) {
        return res.status(404).json({ error: 'Course not found' });
      }
      const user = await User.findById(req.userId);
      if (user.enrolledCourses.includes(course._id)) {
        return res.status(400).json({ error: 'Already enrolled in this course' });
      }
      user.enrolledCourses.push(course._id);
      course.enrolledStudents.push(user._id);
      await user.save();
      await course.save();
      res.json({ message: 'Enrolled successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to enroll in course' });
    }
  };

exports.enrollInCourse = enrollInCourse;