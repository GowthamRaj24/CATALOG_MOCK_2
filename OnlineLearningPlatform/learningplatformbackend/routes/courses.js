const express = require('express');
const router = express.Router();
const createCourse = require('../controllers/courses/createCourse');
const enrollInCourse = require('../controllers/courses/enrollInCourse');
const getAllCourses = require('../controllers/courses/getAllCourses');
const getCourseById = require('../controllers/courses/getCourseById');

router
.post('/create', createCourse.createCourse)
.post('/enroll/:courseId', enrollInCourse.enrollInCourse)
.get('/', getAllCourses.getAllCourses)
.get('/:courseId', getCourseById.getCourseById);


module.exports = router;
