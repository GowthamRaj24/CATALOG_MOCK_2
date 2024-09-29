const express = require('express');
const createCourse = require('../controllers/courses/createCourse');
const enrollInCourse = require('../controllers/courses/enrollInCourse');
const getAllCourses = require('../controllers/courses/getAllCourses');
const getCourseById = require('../controllers/courses/getCourseById');

const routes = express.Router();

routes
.post('/create', createCourse.createCourse)
.post('/enroll/:id', enrollInCourse.enrollInCourse)
.get('/', getAllCourses.getAllCourses)
.get('/:id', getCourseById.getCourseById);


exports.route = routes