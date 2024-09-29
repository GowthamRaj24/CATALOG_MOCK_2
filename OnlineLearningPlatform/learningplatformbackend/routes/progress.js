const express = require('express');
const routes = express.Router();
const updateProgress = require("../controllers/progress/updateProgress");
const getProgress = require("../controllers/progress/getProgress");

routes.post('/update', updateProgress.updateProgress)
    .get('/:courseId', getProgress.getProgress);

exports.route = routes;